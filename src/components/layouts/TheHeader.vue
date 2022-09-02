<template>
    <Popover as="header" class="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24" v-slot="{ open }">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="relative flex flex-wrap items-center justify-center lg:justify-between">
                <div class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                    <div class="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                        <!-- Left nav -->
                        <div class="hidden lg:col-span-2 lg:block">
                            <nav class="flex space-x-4">
                                <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                                    :class="[item.current ? 'text-white' : 'text-cyan-100', 'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10']"
                                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
                            </nav>
                        </div>
                        <div class="px-12 lg:px-0">
                            <SearchBox v-if="isFocus" @onClose="isFocus = false"></SearchBox>

                            <div :class="[ isFocus ? 'invisible': '','mx-auto  w-full max-w-xs lg:max-w-md']">
                                <label for="search" class="sr-only">Search</label>
                                <div class="relative text-white focus-within:text-gray-600">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input id="search" @focus="isFocus = true"
                                        class="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-white placeholder-white focus:border-transparent focus:bg-opacity-100 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                        placeholder="Search" type="search" name="search" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Menu button -->
                <div class="absolute right-0 flex-shrink-0 lg:hidden">
                    <!-- Mobile menu button -->
                    <PopoverButton
                        class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                </div>
            </div>
        </div>

        <TransitionRoot as="template" :show="open">
            <div class="lg:hidden">
                <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <PopoverOverlay class="fixed inset-0 z-20 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <PopoverPanel focus
                        class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
                        <div
                            class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div class="pt-3 pb-2">
                                <div class="flex items-center justify-between px-4">
                                    <div>
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                            <span class="sr-only">Close menu</span>
                                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div class="mt-3 space-y-1 px-2">
                                    <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">
                                        {{
                                                item.name
                                        }}</router-link>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </TransitionChild>
            </div>
        </TransitionRoot>
    </Popover>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue';
import {
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import SearchBox from '../SearchBox.vue';
const navigation = [
    { name: 'Table', href: '/', current: true },
    { name: 'Cards', href: '/cards', current: false },
    { name: 'Settings', href: '/settings', current: false },
]
const isFocus = ref(false)
</script>