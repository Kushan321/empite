<template>
  <div class="Capabilities-wrap">
    <div class="mx-auto flex flex-col md:flex-row items-center">
      <!-- First Column -->
      <div class="w-full md:w-1/2 relative mx-auto flex items-center">
        <img src="/images/cap_1.png" alt="Image 1" class="w-full h-auto" />
        <div class="absolute left-5 xl:left-11 2xl:left-44">
          <div class="mt-8">
            <p class="text-lg md:text-xl text-white">CAPABILITIES</p>
            <h2
              class="leading-none text-xxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4"
            >
              Mobile , Web.<br />
              Cloud.
            </h2>
          </div>
          <button
            class="bg-black text-white px-6 py-3 rounded flex items-center mt-5"
          >
            <span>View services</span>
            <span class="ml-2">&#8594;</span>
          </button>
        </div>
      </div>

      <!-- Second Column -->
      <div class="w-full md:w-1/2 relative mx-auto flex items-center">
        <img src="/images/cap_2.png" alt="Image 2" class="w-full h-auto" />
        <div class="absolute left-5 xl:left-11 2xl:left-44">
          <div class="mt-8">
            <p class="text-lg md:text-xl text-white">SHOWCASE</p>
            <h2
              class="leading-none text-xxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4"
            >
              Our most recent<br />
              projects.
            </h2>
          </div>
          <button
            class="bg-black text-white px-6 py-3 rounded flex items-center mt-5"
          >
            <span>View services</span>
            <span class="ml-2">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto flex flex-col-reverse md:flex-row py-20 pl-4 pr-4 2xl:pl-0 2xl:pr-0"
    >
      <!-- Left side with image -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
        <p class="text-lg md:text-xl">CAPABILITIES</p>
        <h2
          class="leading-none text-xxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-4"
        >
          We help to create<br />
          Digital strategies.
        </h2>
        <div class="container mx-auto mt-8">
          <div class="relative">
            <!-- Title -->
            <div class="text-lg xl:text-xl font-bold mt-2 mb-2">
              Website & Mobile Development
            </div>
            <!-- Progress Bar with Percentage -->
            <div class="bg-gray-300 h-2 rounded-full relative w-3/4">
              <div
                class="bg-red-600 h-2 rounded-full"
                :style="{ width: progress + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side with text content -->
      <div
        class="content-wrap w-full md:w-1/2 text-left flex flex-col items-center md:items-start order-1 md:order-2"
      >
        <div class="container mx-auto mt-8">
          <!-- Item 1 -->
          <div class="expanding-item mb-4">
            <div
              class="flex items-center cursor-pointer"
              @click="toggleItem(1)"
            >
              <span class="toggle-icon" v-if="expandedItem !== 1">&#43;</span>
              <span class="toggle-icon" v-else>&#8722;</span>
              <h3 class="text-lg xl:text-xl font-bold ml-2">
                Website & Mobile App Design
              </h3>
            </div>
            <div v-show="expandedItem === 1" class="mt-2">
              <p class="text-md lg:text-lg 2xl:text-xl">
                We’ve created a full-stack structure for our working workflow
                processes, were from the funny the century initial all the made,
                have spare to negatives.
              </p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="expanding-item mb-4">
            <div
              class="flex items-center cursor-pointer"
              @click="toggleItem(2)"
            >
              <span class="toggle-icon" v-if="expandedItem !== 2">&#43;</span>
              <span class="toggle-icon" v-else>&#8722;</span>
              <h3 class="text-lg xl:text-xl font-bold ml-2">
                Motion Graphics & Animation
              </h3>
            </div>
            <div v-show="expandedItem === 2" class="mt-2">
              <p class="text-md lg:text-lg 2xl:text-xl">
                Description for the Second Item goes here.
              </p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="expanding-item mb-4">
            <div
              class="flex items-center cursor-pointer"
              @click="toggleItem(3)"
            >
              <span class="toggle-icon" v-if="expandedItem !== 3">&#43;</span>
              <span class="toggle-icon" v-else>&#8722;</span>
              <h3 class="text-lg xl:text-xl font-bold ml-2">User Experience</h3>
            </div>
            <div v-show="expandedItem === 3" class="mt-2">
              <p class="text-md lg:text-lg 2xl:text-xl">
                Description for the Third Item goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <!-- First Column: Video -->
      <div class="md:w-3/5 2xl:w-3/5">
        <div class="video-container h-full relative mx-auto justify-center flex items-center">
          <img
            src="images/cap_video.png"
            alt="Video Thumbnail"
            class="play-button w-full h-full object-cover"
          />
          <img class="absolute w-10 sm:w-12 md:w-14 xl:w-16 2xl:w-20" src="images/play.png" />
        </div>
      </div>

      <!-- Second Column: Video -->
      <div class="md:w-3/12 xl:w-1/5">
        <div class="video-container h-full">
          <img
            src="images/cap_video_2.png"
            alt="Video Thumbnail"
            class="play-button w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Third Column: Image -->
      <div class="md:w-1/12 xl:w-2/12">
        <img
          src="images/cap_video_3.png"
          alt="Image"
          class="image object-cover h-full"
        />
      </div>

      <!-- Fourth Column: Empty/White -->
      <div class="w-1/10 bg-white"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedItem: 1,
      progress: 86,
      showTooltip: false,
    };
  },
  methods: {
    toggleItem(index) {
      this.expandedItem = this.expandedItem === index ? 0 : index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
