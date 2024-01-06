<template>
  <div class="footer-wrap">
    <footer class="bg-black text-white p-4 py-20">
      <div class="container mx-auto">
        <!-- First Row -->
        <div class="flex flex-wrap mb-4">
          <!-- Column 1 -->
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <!-- Column Content -->
            <img
              src="/images/logo_white.png"
              alt="Logo"
              class="w-16 h-16 mb-2"
            />
            <!-- Add your content here -->
          </div>

          <!-- Column 2 -->
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <!-- Column Content -->
            <h3 class="text-lg font-bold text-cs_gray">Melbourne</h3>
            <p class="mt-5">
              Level 1, Unit 9 / 677 <br />
              Springvale Road,<br />
              Mulgrave VIC 3170
            </p>
            <h3 class="text-lg font-bold mt-5 text-cs_gray">Colombo</h3>
            <p class="mt-5">
              Level 4, 46/38,<br />
              Navam Mawatha, <br />Colombo 02, 00200
            </p>
          </div>

          <!-- Column 3 -->
          <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <!-- Column Content -->
            <h3 class="text-lg font-bold text-cs_gray">Work inquiries</h3>
            <p class="mt-5">
              Interested in working with us?<br />
              <a href="mailto:hello@empire.com">hello@empire.com</a>
            </p>
          </div>

          <!-- Column 4 -->
          <div
            class="w-full sm:w-1/2 md:w-1/1 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0 mx-auto md:mt-5 lg:mt-0"
          >
            <!-- Column Content -->
            <h3 class="text-lg font-bold text-cs_gray">Stay in touch</h3>
            <div class="flex mt-5 w-full">
              <div class="relative w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  class="flex-grow p-2 w-full rounded bg-cs_light_gray"
                />
                <span
                  class=" text-lg xl:text-xl cursor-pointer subscribe-text absolute right-4 top-1 font-bold"
                  >Subscribe</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex justify-between border-t border-cs_light_gray">
          <p class="text-sm py-5">&copy; 2020, Empire Pty Ltd</p>
          <!-- Add additional content on the right side if needed -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default { name: "Footer" };
</script>

<style lang="scss" scoped>
.footer-wrap {
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
