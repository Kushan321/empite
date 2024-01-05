<template>
  <div class="testimonials-wrap">
    <div class="md:flex">
      <!-- Left Column - Slider -->
      <div class="md:w-1/2 flex items-center">
        <div class="content-wrap pl-5 xl:pl-11 2xl:pl-44">
          <p class="text-lg xl:text-xl">TESTIMONIALS</p>
          <h2
            class="leading-none text-xxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-4 w-3/4"
          >
            We help to achieve mutual goals.
          </h2>
        </div>
      </div>

      <!-- Right Column - Full Width Image -->
      <div class="md:w-1/2">
        <img
          src="images/testimonials_img-min.png"
          alt="Full Width Image"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",

  data() {
    return {};
  },
};
</script>

<style scoped>
/* Add your custom styles or override Tailwind classes here */
</style>
