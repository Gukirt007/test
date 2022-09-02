<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="maxHeight scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2 container bg-white dark:bg-black p-6 rounded-lg">
        <SwitchGroup as="div" class="flex items-center md:px-24 lg:px-24 justify-between">
            <span class="flex flex-grow flex-col">
                <SwitchLabel as="span" class="text-sm font-medium text-gray-900 dark:text-white" passive>Dark Theme</SwitchLabel>
                <SwitchDescription as="span" class="text-sm text-gray-500">Active Toggle will apply dark theme otherwise
                    Light Theme will be applied </SwitchDescription>
            </span>
            <Switch v-model="enabled"
                :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                <span aria-hidden="true"
                    :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
            </Switch>
        </SwitchGroup>
    </div>
</template>
  
  <script>
  import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  
  export default {
      name: "SettingsView",
      components: { Switch, SwitchDescription, SwitchGroup, SwitchLabel },
      data() {
          return {
              enabled:  null
          }
      },
      beforeMount(){
        this.enabled = this.$store.getters.getDarkMode
      },   
      watch: {
          enabled() {
            console.log("changed")
            this.$store.dispatch("setDarkMode" , this.enabled)
          }
      }
  }
  </script>