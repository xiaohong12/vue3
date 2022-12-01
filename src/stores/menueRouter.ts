import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { defineStore, mapActions } from "pinia";

 const useMenueRouterStore = defineStore("menueRouter", () => {

  const router=useRouter()
  const activeIndex = ref('/transfers');
  
  const navationToPage=(item:{path:string})=>{
    activeIndex.value=item?.path
    router.push(item?.path)
  }
  return { navationToPage,activeIndex };
});

export default useMenueRouterStore