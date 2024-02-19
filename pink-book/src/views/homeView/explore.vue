<template>
  <loadPannel @searchMore="searchMore">
    <div ref="refreshRef" class="refresh-div">
      <i class="iconfont icon-jiazai"></i>
    </div>
    <div ref="exploreRef">
      <miniCard
        v-for="(item, index) in exploreCard"
        :infos="item"
        @onImgLoaded="addImageCount"
        :key="item.id"
      ></miniCard>
    </div>
  </loadPannel>
</template>

<script setup>
import miniCard from "../../components/miniCard.vue";
import { ref, reactive, watch } from "vue";
import { exploreCardMock } from "../../mock/homeData";
import computeWaterFallFlow from "../../utils/waterFallFlow";
import loadPannel from "../../components/loadPannel.vue";
import useHooks from "../../hooks/useHooks";

const { isRefresh } = toRefs(useHooks.state)

let exploreCard = reactive([]);
let imgLen = 0; //需要加载的图片总数量
const initData = async () => {
  let res = await exploreCardMock();
  imgLen = res.length;
  res.forEach((element) => {
    exploreCard.push(element);
  });
};
initData();

//瀑布流计算每个card的位置
const exploreRef = ref(null);

//记录card中的image是否加载完毕
let imgCoount = 0;
const addImageCount = () => {
  imgCoount++;
  if (imgCoount === imgLen) {
    computeWaterFallFlow(exploreRef.value);
  }
};

const searchMore = async (callback) => {
  let res = await exploreCardMock(5);

  res.forEach((element) => {
    exploreCard.push(element);
  });

  imgLen = exploreCard.length;
  callback ? callback() : ""
};

const refreshRef = ref(null)
const exploreRefresh = async(callback) => {
  exploreRef.value.parentNode.parentNode.scrollTop = 0
  refreshRef.value.style.height = '100px'
  refreshRef.value.style.transition = 'all 0.3s linear'
  imgCount = 0
  await initData()
  refreshRef.value.style.height = '0px'
  setTimeout(() => {
    refreshRef.value.style.transition = 'r' 
  }, 300); 
 
  
  
  callback ? callback() : ""  
}

watch(() => isRefresh.value, (newValue, oldValue) => {
  if(newValue) {
    exploreRefresh(() => {
      changeRefresh(false)
    })    
  }
  
}) </script>


<style lang="scss" scoped>
  .refresh-div {
    height: 0;
    width: 100%;
    @include flexcc;
  
    i {
      color: rgb(154, 154, 154);
      animation: rotate 0.8s linear infinite;
    
    }
  }
</style>
