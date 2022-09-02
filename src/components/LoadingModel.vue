<template>
    <BaseModel :icon="false" :open="open" :message="loadingMessage">
        <template #icon>
            <img src="../assets/loading.gif" alt="loadingGif">
        </template>
    </BaseModel>
</template>

<script>
import BaseModel from './Base/BaseModel.vue';
export default {
    components: { BaseModel },
    data() {
        return {
            open: true,
            loadingMessage: "Please wait we are loading...",
        }
    },
    methods: {
        close() {
            this.open = false
        },
        tryAgain() {
            location.reload();
        }
    }
}
</script>