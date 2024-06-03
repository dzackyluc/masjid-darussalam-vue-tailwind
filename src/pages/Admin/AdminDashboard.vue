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
            <div class="col-12 col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body px-4 py-4-5">
                  <div class="row">
                    <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                      <h6 class="text-muted font-semibold">
                        <i class="bi bi-people"></i> Zakat
                      </h6>
                      <h6 class="font-extrabold mb-0">
                        {{ jumlahZakat }} Orang
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body px-4 py-4-5">
                  <div class="row">
                    <div class="col-md-8 col-lg-12">
                      <h6 class="text-muted font-semibold">
                        <i class="bi bi-cash"></i> Infaq
                      </h6>
                      <h6 class="font-extrabold mb-0">
                        {{ formatCurrency(infaqTotal) }}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-md-4">
              <div class="card">
                <div class="card-body px-4 py-4-5">
                  <div class="row">
                    <div class="col-md-8 col-lg-12">
                      <h6 class="text-muted font-semibold">
                        <i class="bi bi-cash"></i> Zakat
                      </h6>
                      <h6 class="font-extrabold mb-0">
                        {{ formatCurrency(zakatTotal) }}
                      </h6>
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
          <div class="d-flex gap-3 flex-wrap">
            <div
              v-for="blog in blogs"
              :key="blog.id"
              class=""
            >
              <div class="card" style="width: 15rem">
                <img
                  :src="getImagePath('blog', blog.thumbnail)"
                  class="card-img-top"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ blog.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="page-heading">
          <h4>Kegiatan</h4>
        </div>
        <div class="d-flex flex-wrap gap-3">
          <div
            class="d-flex flex-wrap"
            v-for="Activity in activity"
            :key="Activity.id"
          >
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">{{ Activity.title }}</h5>
                <br />

                <span>{{ formatDate(Activity.start_date) }}</span> <br />
                <span>{{ formatDate(Activity.end_date) }}</span>
                <br />
                <br />
                <p class="card-description">{{ Activity.description }}</p>

                <br />
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
      blogs: [],
      jumlahZakat: 0,
      zakatTotal: 0,
      infaqTotal: 0,
      activity: [],
    };
  },
  mounted() {
    this.fetchDashboard();
  },
  methods: {
    getImagePath(dir, imageName) {
      return import.meta.env.VITE_BASE_IMG_URL + dir + "/" + imageName;
    },

    async fetchDashboard() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        let dt = data.data;

        this.blogs = dt.blog;
        this.jumlahZakat = dt.jumlahZakat;
        this.zakatTotal = dt.zakatTotal;
        this.infaqTotal = dt.infaqTotal;
        this.activity = dt.activity;
      } catch (error) {
        console.error("There was a problem fetching the blogs:", error);
      }
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
    formatDate(dateString) {
      const date = new Date(dateString);

      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );

      const [weekday, day, month, year] = formattedDate.split(" ");
      return `${weekday} ${day} ${month} ${year}`;
    },
  },
};
</script>

<style scoped>
/* Add your dashboard specific styles here */
</style>
