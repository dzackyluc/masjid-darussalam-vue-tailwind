
<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";

const blogs = ref([]);
const newBlog = ref({
  title: "",
  description: "",
  url: "",
  image: null,
});

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
const token = "4|UScdEMUD4dozKsogjlBtatrq5xBpga2yjSBL07kx7d030af8"; // Replace with your actual token, or retrieve it from storage
// const token = localStorage.getItem('token'); // Example if stored in localStorage

const addBlog = async () => {
  const formData = new FormData();
  formData.append("title", newBlog.value.title);
  formData.append("content", newBlog.value.description);
  formData.append("type", "blog");
  formData.append("thumbnail", newBlog.value.image);

  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blog`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    blogs.value.push(data.data);
    resetForm();
  } catch (error) {
    console.error("There was a problem adding the blog:", error);
  }
};

const deleteBlog = async (blogId) => {
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
  } catch (error) {
    console.error("There was a problem deleting the blog:", error);
  }
};

const resetForm = () => {
  newBlog.value = {
    title: "",
    description: "",
    url: "",
    image: null,
  };
  document.getElementById("formFile").value = null;
};

onMounted(fetchBlogs);
</script>


<template>
  <header claszs="mb-3">
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
        <div class="d-flex flex-wrap gap-5">
          <div class="d-flex flex-wrap" v-for="blog in blogs" :key="blog.id">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                :src="getImagePath('blog', blog.thumbnail)"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{ blog.title }}</h5>

                <br />
                <br />
                <div class="d-flex justify-content-end gap-2">
                  <button class="btn btn-primary block">Edit</button>
                  <button
                    @click="deleteBlog(blog.id)"
                    class="btn btn-primary block"
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
              <h2 class="card-title">Add Blog</h2>
            </div>

            <div class="card-body">
              <div class="row">
                <form @submit.prevent="addBlog">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="file"
                      @change="handleFileUpload"
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
                    v-model="newBlog.description"
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
                      Tambah
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
