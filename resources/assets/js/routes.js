import VueRouter from 'vue-router';
import Task from './components/Task.vue';
import Profile from './components/Profile.vue';
import App from './components/App.vue';


let routes = [
    {
        path: '/',
        component: Task
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/cruds',
        component: App
    }
];


export default new VueRouter({
    routes
});