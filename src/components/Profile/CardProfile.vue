<template>
  <div class="col p-0">
    <div class="card card-user">
      <div class="card-image">
        <img
          src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&amp;fm=jpg&amp;h=300&amp;q=75&amp;w=400"
          alt="..."
        />
      </div>
      <!---->
      <div class="card-body position-relative p-0">
        <div class="author">
          <a href="#" class="text-center" style="display: block">
            <img
              src="https://demos.creative-tim.com/vue-light-bootstrap-dashboard/static/img/faces/face-3.jpg"
              alt="..."
              class="rounded-circle border border-gray"
              style="height: 114px; width: 114px"
            />
            <h4 class="title mb-4">
              <span class="text-info fs-5 fw-light">Mike Andrew</span>
              <br />
              <small class="text-muted fs-6 fw-light"
                ><span>michael24</span></small
              >
            </h4>
          </a>
        </div>
        <p class="description text-center fw-light">
          <span> "Lamborghini Mercy </span><br />
          <span> Your chick she so thirsty </span><br />
          <span> I'm in that two seat Lambo" </span>
        </p>
      </div>
      <div class="card-footer">
        <hr />
        <div class="text-center">
          <button href="#" class="btn btn-simple text-muted">
            <i class="fa-brands fa-facebook"></i>
          </button>
          <button href="#" class="btn btn-simple text-muted">
            <i class="fa-brands fa-twitter"></i>
          </button>
          <button href="#" class="btn btn-simple text-muted">
            <i class="fa-brands fa-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-image {
  height: 120px;
}
.author {
  position: relative;
}

.author a {
  position: relative;
  text-decoration: none;
}
.author a img {
  position: absolute;
  transform: translate(-50%, -130%);
}
.title {
  margin: 5rem 0 0 0;
}
</style>
