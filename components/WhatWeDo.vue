<template>
  <div class="WhatWeDo-wrap bg-black">
    <div
      class="container mx-auto flex flex-col-reverse md:flex-row py-20 pl-4 pr-4 2xl:pl-0 2xl:pr-0"
    >
      <div class="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
        <p class="text-cs_gray">WHAT WE DO</p>
        <h2
          class="mt-5 font-bold mb-4 leading-none text-xxl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white"
        >
          Integrated tech<br />
          solutions across all digital platforms
        </h2>
      </div>

      <div
        class="content-wrap w-full md:w-1/2 text-left flex flex-col items-center md:items-start order-1 md:order-2 pb-10 md:pb-0"
      >
        <p
          class="mb-8 text-md md:text-lg xl:text-xl 2xl:text-xxl font-light text-white"
        >
          We are committed to keeping you ahead in today’s fast-paced and
          ever-evolving world by delivering digital solutions that solve
          problems in a secure, simple and effective way.
        </p>
        <div class="container mx-auto">
          <div class="lg:flex mb-8">
            <div class="lg:w-1/2 lg:pr-4 mb-4">
              <img
                src="images/custom_software.png"
                alt="Image 1"
                class="h-auto w-8 xl:w-10 2xl:w-12"
              />
              <h2 class="mt-5 text-xl 2xl:text-xxl font-bold text-white">
                Custom Software
              </h2>
              <p class="mt-1 text-white text-lg xl:text-lg 2xl:text-xl">
                We create solutions that solve your business problems. Our team
                has a decade long success track record.
              </p>
            </div>
            <div class="lg:w-1/2 lg:pl-4 mb-4">
              <img
                src="images/web_app.png"
                alt="Image 1"
                class="h-auto w-8 xl:w-10 2xl:w-12"
              />
              <h2 class="mt-5 text-xl 2xl:text-xxl font-bold text-white">
                Web Applications
              </h2>
              <p class="mt-1 text-white text-lg xl:text-lg 2xl:text-xl">
                We typically build all web applications from scratch to satisfy
                your requirements.
              </p>
            </div>
          </div>

          <div class="lg:flex">
            <div class="lg:w-1/2 lg:pr-4 mb-4">
              <img
                src="images/ux_design.png"
                alt="Image 1"
                class="h-auto w-8 xl:w-10 2xl:w-12"
              />
              <h2 class="mt-5 text-xl 2xl:text-xxl font-bold text-white">
                Mobile Applications
              </h2>
              <p class="mt-1 text-white text-lg xl:text-lg 2xl:text-xl">
                We transform your mobile app ideas into high quality customised
                apps that are easy to use.
              </p>
            </div>
            <div class="lg:w-1/2 lg:pl-4 mb-4">
              <img
                src="images/ux_design.png"
                alt="Image 1"
                class="h-auto w-8 xl:w-10 2xl:w-12"
              />
              <h2 class="mt-5 text-xl 2xl:text-xxl font-bold text-white">
                UI / UX Design
              </h2>
              <p class="mt-1 text-white text-lg xl:text-lg 2xl:text-xl">
                We craft better user experience and Interface designs for your
                digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatWeDo",
};
</script>

<style lang="scss" scoped></style>
