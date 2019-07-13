import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue';

Vue.use(VueRouter);
let Phone = {
    template: `<div>手机</div>`
}
let Computer = {
    template: `<div>电脑</div>`
}
let Tablet = {
    template: `<div>平板</div>`
}
let Acc = {
    template: `<div>配件</div>`
}
let router = new VueRouter({
    routes: [{
            path: '/',
            // component:{template:'<div>404</div>'}
            redirect: {
                name: 'Home'
            }
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,

            // 嵌套路由（子路由）
            children: [{
                name: 'Phone',
                path: 'phone',
                component: Phone
            }, {
                name: 'Computer',
                path: 'computer',
                component: Computer
            }, {
                name: 'Tablet',
                path: 'tablet',
                component: Tablet
            }, {
                name: 'Acc',
                path: 'acc',
                component: Acc
            }]
        },
    ]
})

export default router;