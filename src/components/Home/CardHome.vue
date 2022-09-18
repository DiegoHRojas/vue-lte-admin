<template>
  <div class="col-xl-3 col-md-6 mb-3">
    <div class="card card-stats">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <div class="text-center">
              <div class="fs-1">
                <i :class="icon"></i>
              </div>
            </div>
          </div>
          <div class="col-7 text-end">
            <div class="numbers">
              <div>
                <p class="text-muted">{{ title }}</p>
                <h4 class="text-dark fw-light text-uppercase">{{ cant }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer bg-white border-0">
        <hr class="divider" />
        <div class="stats mt-2">
          <div class="text-secondary fs-6">
            <small> <i :class="icon2" class="me-2"></i> {{ text }} </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "cant", "icon", "icon2", "text"]);
</script>

<style lang="scss" scoped></style>
