import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import BlogsView from '../views/Blogs.vue';
import AboutView from '../views/About.vue';
import SupportView from '../views/Support.vue';
import AddBlogView from '../views/AddBlog.vue';
import BlogDetail from '../views/BlogDetail.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/blogs', component: BlogsView },
  { path: '/blogs/:id', component: BlogDetail },
  { path: '/about', component: AboutView },
  { path: '/support', component: SupportView },
  { path: '/add-blog', component: AddBlogView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
