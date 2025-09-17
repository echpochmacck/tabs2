<script setup lang="ts">
    interface Props {
        tab: object,
    }
    defineProps < Props > ()
</script>
<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="tab.title" :counter="10" :rules="nameRules" label="First name"
                        :readonly="tab?.isOpened"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="tab.id" :counter="10" :rules="nameRules" label="First name"
                        :readonly="tab?.isOpened" required></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>