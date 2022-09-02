
<template>
  <div class="sm:px-6 lg:px-8 rounded-lg maxHeight scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto px-4 pb-4">
    <div class="flex flex-col rounded-lg">
      <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 rounded-lg">
        <div class="inline-block min-w-full py-2 align-middle rounded-lg">
          <div class="shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
            <table class="min-w-full border-separate text-center rounded-lg" style="border-spacing: 0">
              <thead class="bg-gray-50 dark:bg-gray-700 rounded-lg">
                <tr>
                  <th scope="col"
                    class="sticky top-0 z-10 border-b dark:text-white border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3   text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                    Name</th>
                  <th scope="col"
                    class="sticky top-0 z-10 border-b dark:text-white border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3   text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                    Title</th>
                    <th scope="col"
                    class="sticky top-0 z-10 border-b dark:text-white border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3   text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                    API</th>
                  <th scope="col"
                    class="sticky top-0 z-10 border-b dark:text-white border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3   text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                    <span class="">Link</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-black">
                <tr v-for="(person, i) in data" :key="i">
                  <td
                    :class="[i !== data.length - 1 ? 'border-b border-gray-200' : '', i == 1 ?'sticky top-10 z-20 backdrop-blur' :'', 'dark:text-stone-300  py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8']">
                    {{ person.Category }}</td>
                  <td
                    :class="[i !== data.length - 1 ? 'border-b border-gray-200' : '', i == 1 ?'sticky top-10 z-20 backdrop-blur' :'' , 'dark:text-stone-300  py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8']">
                    {{ person.Description }}</td>
                    <td
                    :class="[i !== data.length - 1 ? 'border-b border-gray-200' : '', i == 1 ?'sticky top-10 z-20 backdrop-blur' :'' , 'dark:text-stone-300  py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8']">
                    {{ person.API }}</td>
                  <td
                    :class="[i !== data.length - 1 ? 'border-b border-gray-200' : '', i == 1 ?'sticky top-10 z-20 backdrop-blur' :'', 'relative  py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8']">
                    <a :href="person.Link" target="_blank" class="text-indigo-600 dark:text-cyan-300 hover:text-indigo-900">View Link</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.getData;
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchData');
  }
}
</script>
 