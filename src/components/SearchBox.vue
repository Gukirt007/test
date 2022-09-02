<template>
  <div class="relative z-30" role="dialog" aria-modal="true">
    <div class="fixed inset-0 top-0 z-30 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" @click="closeSearchBox"></div>
      <div :class="searchBoxClasses"
        class="mx-auto lg:mr-0  max-w-xl lg:-mt-16 xl:-mt-16 md:-mt-16 transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
        <div class="relative">
          <MagnifyingGlassIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
            aria-hidden="true" />
          <!-- :autofocus="focusInput" -->
          <input type="text" v-model="rawQuery"
            class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search..." role="combobox" ref="searchbox" aria-expanded="false" aria-controls="options" />
        </div>
        <ul v-if="isFilterStarted && cards.length"
          class="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto pb-2" id="options" role="listbox">

          <ul class=" text-sm text-gray-700" v-for="item in cards" :value="item" :key="item.id" as="template">
            <li @click="redirectTo(item.id)" :class="[
              'flex cursor-pointer select-none items-center px-4 py-2 hover:bg-indigo-600 hover:text-white',
            ]">
              <span class="ml-3 flex-auto truncate">{{ item.title }}</span>
            </li>
          </ul>
        </ul>
        <!-- Empty state -->
        <div v-if="isFilterStarted && cards.length == 0" class="py-14 px-6 text-center text-sm sm:px-14">
          <p class="mt-4 font-semibold text-gray-900">No results found</p>
          <p class="mt-2 text-gray-500">
            We couldn’t find anything with that term. Please try again.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
export default {
  name: "SearchBox",
  data() {
    return {
      rawQuery: "",
      isFilterStarted: false,
    };
  },
  components: {
    MagnifyingGlassIcon
  },
  computed: {
    cards() {
      return this.$store.getters.getFilteredCards
    },
    searchBoxClasses() {
      return "xl:mr-10 2xl:mr-auto"
    }
  },
  watch: {
    rawQuery(newVal) {
      this.filterData(newVal);
    }
  },
  created() {
    setTimeout(() => this.$refs.searchbox.focus(), 100);
  },
  methods: {
    async filterData(query) {
      this.isFilterStarted = true;
      this.$store.dispatch("filterCards", query)
    },
    closeSearchBox() {
      this.$emit("onClose")
    },
    async redirectTo(id) {
      await this.$store.dispatch("highlightCard", id)
      this.$router.push({ name: 'cards' })
      this.closeSearchBox();
    }
  },
};
</script>
