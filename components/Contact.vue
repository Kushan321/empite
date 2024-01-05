<template>
  <div class="contact-wrap flex flex-wrap">
    <div class="w-full lg:w-1/2">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            src="https://maps.google.com/maps?q=colombo&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameborder="0"
            scrolling="no"
            style="width: 100%; height: 480px"
          ></iframe
          ><style>
            .mapouter {
              position: relative;
              height: 480px;
              width: 100%;
              background: #fff;
            }
            .maprouter a {
              color: #fff !important;
              position: absolute !important;
              top: 0 !important;
              z-index: 0 !important;
            }</style
          ><a href="https://blooketjoin.org">blooketjoin</a
          ><style>
            .gmap_canvas {
              overflow: hidden;
              height: 480px;
              width: 100%;
            }
            .gmap_canvas iframe {
              position: relative;
              z-index: 2;
            }
          </style>
        </div>
      </div>
    </div>

    <div
      v-for="(item, index) in ContactData"
      :key="index"
      :class="{
        'bg-light_silver': index === 0,
        'bg-dark_silver': index === ContactData.length - 1,
      }"
      class="w-full flex justify-center items-center md:w-1/2 lg:w-1/4 lg:mt-0"
    >
      <div class="content-wrap p-10">
        <img class="cursor-pointer w-6" :src="item.image" />
        <p class="text-lg xl:text-xl 2xl:text-xxl font-semibold mt-5">
          {{ item.title }}
        </p>
        <div
          class="mb-4 text-lg 2xl:text-xl mt-5"
          v-html="item.description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      ContactData: [
        {
          image: "images/telephone.png",
          title: "Get in touch",
          description:
            "<p>Work and general inquiries<br> <p class='font-bold'>+61.809.120.6705 </p> <br><p class='font-bold'>Assistance hours: </p>Monday - Friday<br> 9.00 am to 5.00 pm</p>",
        },
        {
          image: "images/email.png",
          title: "Post address",
          description:
            "<p>Level 1, Unit 9 / 677 <br>Springvale Road,<br> Mulgrave VIC 3170<br> Australia</p>",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
