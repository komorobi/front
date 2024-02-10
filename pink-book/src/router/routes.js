const routes = [
    {
        name: '首页',
        path: '/',
        component: () =>import('../views/homeView/index.vue'),
    },
    {
        name: '视频',
        path: '/video',
        component: () =>import('../views/videoView/index.vue')
    },
    {
        name: '发布',
        path: '/publish',
        component: () =>import('../views/publishView/index.vue')
    },
    {
        name: '消息',
        path: '/message',
        component: () =>import('../views/messageView/index.vue')
    },
    {
        name: '我',
        path: '/user',
        component: () =>import('../views/userView/index.vue')       
    }
]
export default routes;