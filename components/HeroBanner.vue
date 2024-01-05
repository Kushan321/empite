<template>
  <div class="banner-wrap">
    <div class="mx-auto flex flex-col-reverse md:flex-row items-center">
      <!-- Left side with image -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
        <img
          src="/images/hero_image.png"
          alt="Banner Image"
          class="w-full h-auto"
        />
      </div>

      <!-- Right side with text content -->
      <div
        class="content-wrap w-full md:w-1/2 px-5 text-center md:text-left flex flex-col items-center md:items-start order-1 md:order-2 pb-10 md:pb-0"
      >
        <h2 class="font-bold mb-4 leading-tight text-xxl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          Pushing The Envelope Of Software Development
        </h2>
        <p class="mb-8 text-lg md:text-xl 2xl:text-xxl">
          With unique business ideas and the passionate people behind.
        </p>
        <div class="flex">
          <button
            class="bg-black text-white px-6 py-3 rounded flex items-center"
          >
            Get Started
          </button>
          <div class="flex items-center cursor-pointer ml-5 xl:ml-10">
            <img class="w-10 xl:w-12 2xl:w-14" src="images/play_btn.png" />
            <p class="text-sm ml-2">How it works</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
};
</script>

<style lang="scss" scoped></style>
