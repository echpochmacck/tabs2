import { ref, computed } from "vue";
import { defineStore} from "pinia";
interface TreeItem {
  id: number;
  title: string;
  children?: TreeItem[];
}
export const useTreeStore = defineStore("tree", () => {
  const _selectedObject = ref<TreeItem | null>(null);
  const selectedObject = computed(() => _selectedObject.value);
  const setSelectedObject = (obj: TreeItem) => (_selectedObject.value = obj);
  return { selectedObject, setSelectedObject};
});

export type { TreeItem };
