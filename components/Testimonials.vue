<template>
  <div class="testimonials-wrap">
    <div class="md:flex">
      <!-- Left Column - Slider -->
      <div class="md:w-1/2 flex items-center">
        <div class="content-wrap pl-5 xl:pl-11 2xl:pl-44 w-full">
          <p class="text-lg xl:text-xl">TESTIMONIALS</p>
          <h2
            class="leading-none text-xxl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-4 w-3/4"
          >
            We help to achieve mutual goals.
          </h2>
          <div class="carousel h-full lg:h-96 pb-14 lg:pb-0">
            <hooper ref="carousel">
              <slide v-for="(item, index) in SliderData" :key="index">
                <img class="mt-10 rounded-full w-14" src="images/person.png" />
                <p class="mt-5 text-lg xl:text-xxl font-bold">
                  {{ item.title }}
                </p>
                <p class="mt-5 text-lg xl:text-xl w-3/4">
                  {{ item.description }}
                </p>
                <p class="mt-5 text-lg xl:text-xxl font-bold">
                  {{ item.name }}
                </p>
                <p class="mt-5 text-lg xl:text-xl">
                  {{ item.designation }}
                </p></slide
              >

              <hooper-pagination
                slot="hooper-addons"
                mode="fraction"
                class="text-xl"
              ></hooper-pagination>
            </hooper>
            <div class="controls-wrap flex justify-end pr-5 lg:pr-20 mt-5 md:mt-6 lg:-mt-8 xl:mt-0">
              <button @click.prevent="slidePrev">
                <img class="w-10" src="images/prev_control.png" />
              </button>

              <button class="ml-5" @click.prevent="slideNext">
                <img class="w-10" src="images/next_control.png" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Full Width Image -->
      <div class="md:w-1/2">
        <img
          src="images/testimonials_img-min.png"
          alt="Full Width Image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Testimonials",

  data() {
    return {
      SliderData: [
        {
          title: "“Great Development Team”",
          description:
            " “Need a one life feedback from Jared about empire and its work related to good 2 give.”",
          name: "Jared Ortlipp",
          designation: "CTO, Good 2 Give",
        },
        {
          title: "“Great Development Team”",
          description:
            " “Need a one life feedback from Jared about empire and its work related to good 2 give.”",
          name: "Otara Ortlipp",
          designation: "CEO, Good 2 Give",
        },
        {
          title: "“Great Development Team”",
          description:
            " “Need a one life feedback from Jared about empire and its work related to good 2 give.”",
          name: "Dev Ortlipp",
          designation: "CRO, Good 2 Give",
        },
      ],
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
};
</script>

<style scoped lang="scss">
.testimonials-wrap {
  .hooper {
    height: 100% !important;

    &-pagination {
      bottom: -40px !important;
      right: 100%;
      @media (max-width: 1024.98px) {
        right: 95%;
        bottom: -10px !important;

      }
      @media (max-width: 959.98px) {
        bottom: -60px !important;
        right: 95%;
      }
      @media (max-width: 619.98px) {
        bottom: -60px !important;
        right: 95%;
      }
    }
  }
}
</style>
