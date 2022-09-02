<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform overflow-hidden content-center rounded-lg bg-white dark:bg-black px-4 pt-5 pb-4 text-center shadow-xl transition-all sm:my-8 w-full sm:max-w-lg sm:p-6">
                            <div class="sm:flex sm:items-start justify-center items-center">
                                <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-black sm:mx-0 sm:h-10 sm:w-10">
                                    <slot name="icon"></slot>
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4">
                                    <div class="mt-2">
                                        <p class="text-sm text-center dark:text-white text-gray-500">{{ message }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-4 justify-center  sm:flex sm:pl-4">
                                <slot></slot>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
  <script >
  import { Dialog, DialogPanel, 
    // DialogTitle, 
    TransitionChild, TransitionRoot } from '@headlessui/vue'
  
  export default {
      name: "BaseModel",
      components: { Dialog, DialogPanel, TransitionChild, TransitionRoot },
      props:{
        message:{ 
            required: true,
            type: String
        },
        open:{
            required: true,
            type: Boolean
        }
      }
  }
  </script>