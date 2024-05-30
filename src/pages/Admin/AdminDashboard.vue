<template>
  <div>
    <header class="mb-3">
      <a href="#" class="burger-btn d-block d-xl-none">
        <i class="bi bi-justify fs-3"></i>
      </a>
    </header>
    <div class="page-content">
      <section class="row">
        <div class="col-12 col-lg-12">
          <div class="row">
            <div class="col-12 col-lg-6 col-md-6">
              <div class="card">
                <div class="card-body px-4 py-4-5">
                  <div class="row">
                    <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                      <h6 class="text-muted font-semibold">
                        <i class="bi bi-people"></i> Zakat
                      </h6>
                      <h6 class="font-extrabold mb-0">50 Orang</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-md-6">
              <div class="card">
                <div class="card-body px-4 py-4-5">
                  <div class="row">
                    <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                      <h6 class="text-muted font-semibold">
                        <i class="bi bi-cash"></i> Infaq
                      </h6>
                      <h6 class="font-extrabold mb-0">Rp183.000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        <div class="page-heading">
        <h4>Blog</h4>
      </div>
      <div class="col-12 col-lg-12">
        <div class="row">
          <div v-for="blog in blogs" :key="blog.id" class="col-4 col-lg-3 col-md-4">
            <div class="card" style="width: 15rem">
              <img :src="getImagePath('blog',blog.thumbnail)" class="card-img-top" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ blog.title }}</h5>
                <p class="card-text">{{ blog.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <div class="page-heading">
          <h4>Kegiatan</h4>
        </div>
        <div class="col-12 col-lg-12">
          <div class="row">
            <div class="col-4 col-lg-3 col-md-4">
              <div class="card" style="width: 40rem; flex-direction: row">
                <img
                  class="card-img-top"
                  src="./assets/compiled/svg/mekah.jpg"
                  alt="Card image cap"
                  style="
                    width: 40%;
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;
                    border-top-right-radius: 0px;
                  "
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>



<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    getImagePath(dir,imageName) {
      return import.meta.env.VITE_BASE_IMG_URL + dir + '/' + imageName;
    },
  
    async fetchBlogs() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blog`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.blogs = data.data.data;
        console.log(data.data.data);
      } catch (error) {
        console.error('There was a problem fetching the blogs:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your dashboard specific styles here */
</style>
