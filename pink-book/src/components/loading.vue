<template>
    <div class="loading">
        <i class="iconfont icon-jiazai"></i>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
    .loading {
        @include flexcc;    
        height: 3.125rem;
        i {
            color: rgb(154, 154, 154);
            animation: rotate 0.8s linear infinite;
        }
    }

</style>