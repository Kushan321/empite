<template>
  <div class="video-wrapper h-96 md:h-auto">
    <div class="video-container relative h-full">
      <!-- Video Thumbnail -->
      <img
        src="images/video_thumb.png"
        alt="Video Thumbnail"
        class="w-full h-full cursor-pointer object-cover"
      />

      <!-- Play Button -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <img
          class="cursor-pointer w-10 sm:w-12 md:w-14 xl:w-16 2xl:w-20"
          src="images/play.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "VideoBanner" };
</script>

<style lang="sass" scoped></style>
