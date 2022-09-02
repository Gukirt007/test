<template>
  <div class="min-h-full bg-white dark:bg-gray-800">
    <TheHeader></TheHeader>
    <main class="-mt-24 pb-8">
      <div class="mx-auto container max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 rounded-lg">
        <router-view></router-view>
      </div>
    </main>
    <TheFooter></TheFooter>
  </div>

  <ErrorModel v-if="isAnyError" :shouldOpen="isAnyError"></ErrorModel>
  <LoadingModel v-if="isLoading"></LoadingModel>

</template>

<script >
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import ErrorModel from './components/ErrorModel.vue'
import LoadingModel from './components/LoadingModel.vue'

export default {
  name: "App",
  components: { TheHeader, TheFooter, ErrorModel, LoadingModel },
  computed: {
    isAnyError() {
      return this.$store.getters.getError;
    },
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
    isDarkModeActive() {
      return this.$store.getters.getDarkMode
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchCards');
  },
  watch: {
    isDarkModeActive(newVal) {
      if (newVal) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>