import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewsView from '../views/NewsView.vue';
import AboutView from '../views/AboutView.vue';
import SupportView from '../views/SupportView.vue';
import AddBlogView from '../views/AddBlogView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/news', component: NewsView },
  { path: '/about', component: AboutView },
  { path: '/support', component: SupportView },
  // { path: '/blogs', component: BlogListView },
  { path: '/add-blog', component: AddBlogView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
