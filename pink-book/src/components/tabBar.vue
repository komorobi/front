<template>
    <div class="tab-bar">
        <template v-for="(item, index) in menus" :key="item.path">
            <div v-if="item.path === '/publish'" class="tab-pub" @click="toPath(item.path)" :class="{ active: item.path === path }">
                <i class="iconfont icon-jia"></i> 
            </div>
            <div v-else class="tab-name" @click="toPath(item.path)" :class="{ active: item.path === path }">
               {{ item.name }}
            </div>
        
        </template>
    </div>
</template>

<script setup>
    import router from '@/router';  
    import routes from '../router/routes';
    import { ref, reactive, watch } from 'vue'
    import useHooks from '../hooks/useHooks';
    const { changeRefresh } = useHooks
    
    const menus = routes
    let path = ref('/')

    const toPath = (p) => {
        if (path.value === p && p === '/') {
            changeRefresh(true)
        }
        router.push({
            path: p
        })
        path.value = p
    }

    watch(router.currentRoute.value.path, () => {
        path.value = router.currentRoute.value.path
    })
</script>

<style lang="scss" scoped>
    .tab-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3rem;
        @include flexac;
        background-color: #fff;
        font-size: .9rem;
        color: rgb(149, 149, 149);
        z-index: 999;

        .tab-name {
            min-width: 10%;
            text-align: center;
            translate: all 0.1s linear;

            &.active {
                font-size: 1rem;
                color: rgb(51, 51, 51);
                font-weight: bold;
            }
        }

        .tab-pub {
            background-color: red;
            border-radius: 20%;
            height: 70%;
            width: 3.125rem;
            @include flexcc;

            i {
                color: white;
                font-size: 1.5rem;
            }
        }
    }
</style>
