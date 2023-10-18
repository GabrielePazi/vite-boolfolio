import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectShow from "./pages/ProjectShow.vue";
import ContactPage from "./pages/ContactPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";


const routes = [
  {
    path: '/',  //è l'uri che mi servirà per arrivare ad una pagina
    name: 'home',  //nome della rotta(non della pagina)
    component: AppHome  //componente con l'html
  },
  {
    path: '/projects/:slug',
    name: 'project.show',
    component: ProjectShow
  },
  {
    path: '/contact',
    name: 'contactMe',
    component: ContactPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage
  }
]

export const router = createRouter({
  //serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes //è l'array di rotte
})