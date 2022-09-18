<template>
  <div class="card col-md-8 p-0">
    <div class="card-header border-0 bg-white">
      <h4 class="card-text fw-light mt-2 text-muted">
        <span class="">Edit Profile</span>
      </h4>
    </div>
    <div class="card-body">
      <form @submit.prevent="sendData">
        <div class="row">
          <div class="col-md-5">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> company </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                disabled="disabled"
                placeholder="Light dashboard"
                class="form-control"
                v-model.trim="compania"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> Username </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Username"
                class="form-control"
                v-model.trim="data.userName"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> Email </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="email"
                placeholder="Email"
                class="form-control"
                v-model.trim="data.email"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> First Name </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="First Name"
                class="form-control"
                v-model.trim="data.name"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> Last Name </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Last Name"
                class="form-control"
                v-model.trim="data.lastName"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> Address </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Home Address"
                class="form-control"
                v-model.trim="data.address"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> City </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="City"
                class="form-control"
                v-model.trim="data.city"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> Country </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Country"
                class="form-control"
                v-model.trim="data.country"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span> Postal Code </span>
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="number"
                placeholder="ZIP Code"
                class="form-control"
                v-model.trim="data.postalCode"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label fs-6 fw-nomal text-muted mb-1">
                <span>About Me</span>
              </label>
              <textarea
                rows="3"
                placeholder="Here can be your description"
                class="form-control border-input"
                v-model.trim="data.description"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="text-end mt-3">
          <button type="submit" class="btn btn-info text-white">
            <span><span> Update Profile </span></span>
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
    <!---->
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  compania: "Light dashboard",
  userName: "",
  email: "",
  name: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  postalCode: "",
  description: "",
});

const sendData = () => {
  alert("tu informacion: " + JSON.stringify(data));
};
</script>

<style lang="scss" scoped>
label span {
  font-size: 0.8rem;
  text-transform: uppercase;
}
</style>
