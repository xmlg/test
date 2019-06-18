import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import schedulingContent from '@/components/schedulingContent' //甜甜--按轨道跑小球

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/schedulingContent',
            name: 'schedulingContent',
            component: schedulingContent
        },
    ]
})