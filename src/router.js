import Vue from "vue";
import Router from "vue-router";
import homepage from "@/views/homepage.vue";
import loginpage from "@/views/loginpage.vue";
import usuarios from "@/views/usuarios.vue";
import RegisterPage from "@/views/registerpage.vue";
import listasolicitudes from "@/views/listasolicitudes.vue";
import listaeventos from "@/views/listaeventos.vue";
import listabeneficios from "@/views/listabeneficios.vue";
import listanoticias from "@/views/listanoticias.vue";
import listaagrupaciones from "@/views/listaagrupaciones.vue";
import agrupacion from "@/views/agrupacion.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: "/", name: "home", component: homepage},
    {path: "/loginpage",name: "login",component: loginpage},
    {path: "/registerpage", name:"register", component: RegisterPage },
    {path: "/listasolicitudes", name: "solicitudes", component: listasolicitudes},
    {path: "/usuarios", name: "usuarios", component: usuarios},
    {path: "/listaagrupaciones", name: "agrupaciones", component: listaagrupaciones},
    {path: "/listaeventos", name: "eventos", component: listaeventos},
    {path: "/listanoticias", name: "noticias", component: listanoticias},
    {path: "/listabeneficios", name: "beneficios", component: listabeneficios},
    {path: "/agrupacion", name: "agrupacion", component: agrupacion},
    { path: '*', redirect: '/' }
  ]
});

  