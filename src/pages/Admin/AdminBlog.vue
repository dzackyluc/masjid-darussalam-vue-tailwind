
<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";

const token = localStorage.getItem("authToken");

const blogs = ref([]);
const newBlog = ref({
  id: null,
  title: "",
  content: "",
  url: "",
  image: null,
});
const isEditing = ref(false);

const getImagePath = (folder, imagePath) => {
  return import.meta.env.VITE_BASE_IMG_URL + folder + "/" + imagePath;
};

const fetchBlogs = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blog`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    blogs.value = data.data.data;
  } catch (error) {
    console.error("There was a problem fetching the blogs:", error);
  }
};

const handleFileUpload = (event) => {
  newBlog.value.image = event.target.files[0];
};

const addBlog = async () => {
    Swal.showLoading();

  const formData = new FormData();
  formData.append("title", newBlog.value.title);
  formData.append("content", newBlog.value.content);
  formData.append("type", "blog");
  formData.append("thumbnail", newBlog.value.image);

  try {
    let response;
    if (isEditing.value) {
      // Update blog
      response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/blog/${newBlog.value.id}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      // Create new blog
      response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blog`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (!response.ok) {
      Swal.fire({
            icon: "error",
            title: "Ada field yang belum diisi",
            text: "Data Blog gagal ditambahkan",
          });
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (isEditing.value) {
      // Update blog in the list
      const index = blogs.value.findIndex((blog) => blog.id === newBlog.value.id);
      if (index !== -1) {
        blogs.value[index] = data.data;
      }
      isEditing.value = false;
    } else {
      blogs.value.push(data.data);
    }
    resetForm();

    Swal.close();
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: `Data Blog berhasil ${isEditing.value ? "diupdate" : "ditambahkan"}`,
    });
  } catch (error) {
    console.error(`There was a problem ${isEditing.value ? "updating" : "adding"} the blog:`, error);
  }
};

const editBlog = (blog) => {
  newBlog.value = { ...blog };
  isEditing.value = true;
};

const deleteBlog = async (blogId) => {

  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.showLoading();

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/blog/${blogId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        blogs.value = blogs.value.filter((blog) => blog.id !== blogId);

        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Data Blog berhasil dihapus",
        });
      } catch (error) {
        console.error("There was a problem deleting the blog:", error);
      }
    }
  });


};

const resetForm = () => {
  newBlog.value = {
    id: null,
    title: "",
    content: "",
    url: "",
    image: null,
  };
  isEditing.value = false;
  document.getElementById("formFile").value = null;
};

onMounted(fetchBlogs);
</script>

<template>
  <header class="mb-3">
    <a href="#" class="burger-btn d-block d-xl-none">
      <i class="bi bi-justify fs-3"></i>
    </a>
  </header>
  <div class="page-title">
    <div class="row">
      <div class="col-12 col-md-6 order-md-2 order-first">
        <nav aria-label="breadcrumb" class="breadcrumb-header float-start">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-12">
    <div class="row">
      <div class="col-lg-6">
        <div class="d-flex flex-wrap gap-3">  
          <div class="d-flex flex-wrap" v-for="blog in blogs" :key="blog.id">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                :src="getImagePath('blog', blog.thumbnail)"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ blog.title }}</h5>
                <br>
                <div class="d-flex justify-content-end gap-2">
                  <button class="btn btn-primary block" @click="editBlog(blog)">Edit</button>
                  <button
                    @click="deleteBlog(blog.id)"
                    class="btn btn-danger block"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4 col-lg-6 col-md-4">
        <section class="section">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">{{ isEditing ? "Edit" : "Add" }} Blog</h2>
            </div>

            <div class="card-body">
              <div class="row">
                <form @submit.prevent="addBlog">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="file"
                      @change="handleFileUpload"
                      id="formFile"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="newBlog.title"
                      type="text"
                      class="form-control"
                      placeholder="Judul Blog"
                    />
                  </div>
                  <Editor
                    v-model="newBlog.content"
                    api-key="okc1krocsefjl2o7r6w7lhme6h85v46r85b1iar6x1m1rdn1"
                    :init="{
                      toolbar_mode: 'sliding',
                      plugins:
                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                      toolbar:
                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    }"
                    initial-value="Welcome to TinyMCE!"
                  />
                    
                  <div class="form-group">
                    <button
                      class="btn btn-primary block"
                      style="margin-top: 0.5rem; width: 100%"
                    >
                      {{ isEditing ? "Update" : "Tambah" }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>








<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>
