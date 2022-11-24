import {createWebHistory, createRouter} from 'vue-router'
import CardProfile from './components/Card.vue'

const routes = [
    {
        name: 'Card',
        path: '/homepage',
        component: CardProfile
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;