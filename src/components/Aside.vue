<template>
  <aside class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <div class="d-flex main-p justify-content-between align-items-center p-2">
      <div class="content">
        <img
          src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
          alt=""
        />
      </div>
      <h4 class="title">AdminLTE 3</h4>
    </div>

    <hr />
    <div class="d-flex main-p justify-content-around align-items-center p-2">
      <div class="content">
        <img
          src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
          alt=""
        />
      </div>
      <span class="title">Alexander Pierce</span>
    </div>
    <hr />
    <div class="input-group" style="margin-bottom: 1rem">
      <input type="search" class="form-control input" />
      <div style="border: 1px solid #ddd">
        <button class="btn btn-sidebar text-white">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <!-- sssssssssssss -->
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <i class="nav-icon fas fa-tachometer-alt"></i>
            Dashboard
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.text-secondary {
  background-color: violet;
}
.content {
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
img {
  width: 100%;
  height: 100%;
}

.main-p {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}
.input {
  background-color: #4b545c;
  border-radius: 3px;
  border: 0.5px solid #ddd;
}
.input:focus {
  box-shadow: none;
  background-color: #4b545c;
}
</style>
