<script setup lang="ts">
    import {ref, watchEffect} from "vue";
    import {type TreeItem, useTreeStore} from "@/stores/TreeStore.ts";
    const treeStore = useTreeStore();
    const arrOfObjects = ref < TreeItem[] > ([])
    const tab = ref < number > (0)

    watchEffect(() => {
        if (treeStore.selectedObject !== null) {
            if (arrOfObjects.value.includes(treeStore.selectedObject)) {
                const newObj = {...treeStore.selectedObject, isOpened: true}
                arrOfObjects.value.push(newObj)
            } else {
                arrOfObjects.value.push(treeStore.selectedObject);

            }

            tab.value = arrOfObjects.value.length - 1
            treeStore.setSelectedObject(null)
        }
    })

    function removeTab(index) {
        arrOfObjects.value.splice(index, 1)

        tab.value = arrOfObjects.value.length ? arrOfObjects.value.length - 1 : 0

    }
</script>

<template>

    <v-card class="w-100 h-100">
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab :value="index" v-for="(tabs, index) in arrOfObjects" :hide-slider="true"
                style="border-right: 1px solid #aaa !important;">Item {{ tabs.id }}
                <span style="cursor: pointer; color: red; margin-left: 8px;" @click.stop="removeTab(index)">
                    ✖
                </span>
            </v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item v-for="(tabs, index) in arrOfObjects" :value="index">
                    <!-- {{ tabs }} -->
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field v-model="tabs.title" :counter="10" :rules="nameRules"
                                        label="First name" :readonly="tabs?.isOpened"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field v-model="tabs.id" :counter="10" :rules="nameRules" label="First name"
                                        :readonly="tabs?.isOpened" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>

</template>