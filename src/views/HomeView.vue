<script setup lang="ts">
  import Tree from '@/components/Tree.vue'
  import AsyncComponent from '@/components/AsyncComponent.vue'
</script>

<template>
  <tree></tree>
  <v-container class="d-flex justify-center align-center h-100 w-100">
    <async-component componentUrl="../components/Tabs.vue"></async-component>
  </v-container>
</template>