<template>
  <div class="Capabilities-wrap">
    <!-- Capabilites tile wrap starts here-->

    <div class="mx-auto flex flex-col md:flex-row items-center">
      <div
        class="w-full md:w-1/2 relative mx-auto flex items-center"
        v-for="(item, index) in CapabilityData.tiles"
        :key="index"
      >
        <img :src="item.image" alt="Image 1" class="w-full h-auto" />
        <div class="absolute left-5 xl:left-11 2xl:left-44">
          <div class="mt-8">
            <p class="text-lg md:text-xl text-white">{{ item.subtitle }}</p>
            <div
              class="leading-none text-xxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4"
              v-html="item.title"
            ></div>
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
    <!-- Capabilites 2nd section starts here-->

    <div
      class="container mx-auto flex flex-col-reverse md:flex-row py-20 pl-4 pr-4 2xl:pl-0 2xl:pr-0"
    >
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
            <div class="mt-10 lg:mt-5">
              <div class="bg-gray-300 h-2 rounded-full w-3/4">
                <div
                  class="relative bg-red-600 h-2 rounded-full"
                  :style="{ width: progress + '%' }"
                >
                  <span
                    class="absolute bottom-0 right-0 mt-1 px-2 py-1 bg-black text-white rounded opacity-75 tooltip"
                  >
                    {{ progress }}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    <!-- Capabilites video section starts here-->

    <div class="flex">
      <div class="md:w-3/5 2xl:w-3/5">
        <div
          class="video-container h-full relative mx-auto justify-center flex items-center"
        >
          <img
            src="images/cap_video.png"
            alt="Video Thumbnail"
            class="play-button w-full h-full object-cover"
          />
          <img
            class="cursor-pointer absolute w-10 sm:w-12 md:w-14 xl:w-16 2xl:w-20"
            src="images/play.png"
          />
        </div>
      </div>

      <div class="md:w-3/12 xl:w-1/5">
        <div class="video-container h-full">
          <img
            src="images/cap_video_2.png"
            alt="Video Thumbnail"
            class="play-button w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="md:w-1/12 xl:w-2/12">
        <img
          src="images/cap_video_3.png"
          alt="Image"
          class="image object-cover h-full"
        />
      </div>

      <div class="w-1/10 bg-white"></div>
    </div>
    <!-- Capabilites last section starts here-->

    <div
      class="container mx-auto block md:flex pl-4 pr-4 2xl:pl-0 2xl:pr-0 py-20"
    >
      <div class="md:w-1/3">
        <div class="content-wrap">
          <div class="flex items-center">
            <img
              src="images/dots.png"
              alt="Image 1"
              class="w-4 xl:w-5 2xl:w-8 h-auto"
            />

            <div
              class="font-bold text-gray-700 mb-2 ml-3 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl"
            >
              236
            </div>
          </div>

          <h3 class="text-lg xl:text-xl 2xl:text-xxl font-bold mb-2">
            Succeeded <br />project
          </h3>

          <p class="text-lg xl:text-xl w-full md:w-3/4">
            Our clients describe us as a product team which creates amazing
            UI/UX, by crafting top-notch user experience.
          </p>
        </div>
      </div>

      <div class="md:w-2/3">
        <div class="content-wrap mt-10 md:mt-0">
          <div class="flex items-center">
            <img
              src="images/dots.png"
              alt="Image 1"
              class="w-4 xl:w-5 2xl:w-8 h-auto"
            />

            <div
              class="font-bold text-gray-700 mb-2 ml-3 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl"
            >
              9346
            </div>
          </div>
          <h3 class="text-lg xl:text-xl 2xl:text-xxl font-bold mb-2">
            Working hours<br />
            Were spent
          </h3>

          <p class="text-lg xl:text-xl w-full md:w-2/4">
            We’ve structured our workflow processes were from the funny the
            century rather, initial all the made, have spare to negatives.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Capabilities",

  data() {
    return {
      expandedItem: 1,
      progress: 86,
      showTooltip: false,

      CapabilityData: {
        tiles: [
          {
            subtitle: "CAPABILITIES",
            image: "/images/cap_1.png",
            title: "<h2>Mobile. Web.<br> Cloud.</h2>",
          },
          {
            subtitle: "SHOWCASE",
            image: "/images/cap_2.png",
            title: "<h2>Our most recent<br> projects.</h2>",
          },
        ],
      },
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
