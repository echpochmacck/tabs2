<script setup lang="ts">
import { defineProps } from "vue";
import type { TreeItem } from "@/stores/treeStore.ts";
import type { TabContent } from "@/components/Tabs.vue";
interface Props {
  tab: TabContent;
}

defineProps<Props>();
</script>
<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="tab.title"
            :counter="10"
            label="First name"
            :readonly="tab?.readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="tab.id"
            :counter="10"
            label="First name"
            :readonly="tab?.readOnly"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
