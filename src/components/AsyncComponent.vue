<script setup lang="ts">
    import {defineAsyncComponent, defineProps} from "vue";

    interface Props {
        componentUrl: string
    }

    const props = defineProps < Props > ()
    const AsyncComp = defineAsyncComponent(
        () => import(/* @vite-ignore */ props.componentUrl)
    )


</script>
<template>
    <component :is="AsyncComp"></component>
</template>