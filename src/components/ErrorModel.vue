<template>
    <BaseModel icon="ExclamationTriangleIcon" :open="shouldOpen" :message="errorMessage">
        <template #icon>
            <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
        </template>
        <template #default>
            <button type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
                @click="tryAgain">Try Again</button>
            <button type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="close" ref="cancelButtonRef">Cancel</button>
        </template>
    </BaseModel>
</template>

<script>
import BaseModel from './Base/BaseModel.vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

export default {
    components: { BaseModel,ExclamationTriangleIcon },
    data() {
        return {
            errorMessage: "Oops! we got an error",
        }
    },
    methods: {
        close() {
            this.$store.dispatch("resetErrorState" , false)
        },
        tryAgain() {
            location.reload();
        }
    },
    props:{
        shouldOpen:{
            required: true
        }
    }
}
</script>