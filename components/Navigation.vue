<template>
  <div class="navigation-wrap">
    <nav class="bg-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div>
          <router-link to="/" class="text-white text-lg font-bold"
            ><img src="/images/logo.png"
          /></router-link>
        </div>

        <div class="hidden lg:flex space-x-10">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/contact">Portfolio</router-link>
          <router-link to="/contact">Services</router-link>
          <button class="bg-black text-white py-1 px-4 rounded">
            Let's talk
          </button>
        </div>

        <div class="lg:hidden">
          <button @click="toggleMobileMenu">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Mobile menu -->
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden absolute top-16 left-0 right-0 bg-white"
        >
          <div class="flex flex-col items-center space-y-4 p-4">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/contact">Portfolio</router-link>
            <router-link to="/contact">Services</router-link>
            <button class="bg-black text-white py-1 px-4 rounded">
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationMenue",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.navigation-wrap {
  img {
    width: 115px;
    height: 54px;
    @media (max-width: 959.98px) {
      width: 86.25px;
      height: 40.5px;
    }
  }
}
</style>
