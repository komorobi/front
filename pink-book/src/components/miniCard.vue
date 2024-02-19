<template>
  <div class="card-content">
    <div class="card-top">
      <div class="card-tri-bg" v-if="props.infos.isVideo">
        <svg viewBox="-50 -50 200 300" class="card-svg">
          <polygon class="card-tri" stroke-linejoin="round" points="0,0 0,200 170,100"></polygon>
        </svg>
      </div>
      <img :src="props.infos.imageUrl" class="card-sorce" @load="emits('onImgLoaded')"/>
    </div>
    <div class="card-title">{{ props.infos.content }}</div> 
    <div class="card-bottom">
      <div class="card-b-left"> 
        <img :src="props.infos.avatar" class="card-head" />
        <div class="card-name">{{ props.infos.author }}</div>
      </div>
      <div class="card-b-right">
        <i class="iconfont icon-aixin icon-card-small"></i>
        <p class="card-like" v-if="props.infos.likeCount">{{ props.infos.likeCount }}</p>
        <p class="card-like" v-else>赞</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";


const props = defineProps(['infos'])// 在父组件explore.vue中有:infos="item"
const emits = defineEmits(['onImgLoaded'])
</script>
<style lang="scss" scoped>
.card-content {
  width: 50vw;
  height: auto;
  background-color: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem, 0.3125rem rgba(181, 181, 191, 0.1);
  overflow: hidden;
  position: absolute;
  .card-top {
    position: relative;
    .card-tri-bg {
      position: absolute;
      right: 0.675rem;
      top: 0.625rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
      @include flexcc;

      .card-svg {
         width: 0.8rem;
         height: 0.8rem;
        
         .card-tri {
          fill: rgb(254, 254, 254);
          stroke: rgb(254, 254, 254);
          stroke-width: 50;
         }
      }
    }
    .card-sorce {
      width: 100%;
    }
  }
  .card-title {
    width: calc(100% - 1rem);
    font-size: 0.75rem;
    letter-spacing: 0.05rem;
    color: rgb(51, 51 , 51);
    line-height: 1.125rem;
    font-weight: 600;
    padding: 0 0.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-bottom {
    padding: 0.8rem, 0.5rem;
    @include flexlr;
    .card-b-left {
      @include flexxl;
      .card-head {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
      }

      .card-name {
        color: rgb(153, 153, 153);
        font-size: 0.5rem;
        margin: 0 0 0.4375rem;
      }
    }
    .card-b-right {
      @include flexxl;
      .icon-card-small {
        font-size: 0.625rem;
        color: rgb(153, 153, 153);
      }

      .card-like {
        margin: 0, 0, 0, 0.3rem;
        color: rgb(153, 153, 153);
        font-size: 0.625rem; 
      }
    }
  }
}
</style>
