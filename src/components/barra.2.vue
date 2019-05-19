<template>
  <nav>
       <v-toolbar app dark class="teal darken-4 elevation-20" tabs>
     <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up" ></v-toolbar-side-icon>

      <v-toolbar-title> <router-link to="/" tag="span" style="cursor: pointer">
        <span class="yellow--text display-1">S</span>
        <span class="yellow--text display-1">G</span>
        <span class="white--text display-1" >artes</span>
        
        </router-link></v-toolbar-title>

      <v-spacer class="hidden-xs-only" ></v-spacer>

              <v-toolbar-items class="hidden-xs-only" >
                <v-btn
                  flat
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.link">
                  <v-icon left dark small class="yellow--text hidden-xs-only">{{ item.icon }}</v-icon>
                  {{ item.title }}

                </v-btn>
               
              </v-toolbar-items>

      <template v-slot:extension >
        <v-tabs
          icons-and-text height="45"
          centered small
          color="teal darken-4"
          grow class="body-1 elevation-2 hidden-sm-and-down "
        >
          <v-tabs-slider  color="yellow"></v-tabs-slider>

          <v-tab class="body-1 font-weight-bold  hidden-xs-and-down" small v-for="item in menuItems2" :key="item.title"  :to="item.link">
            {{ item.title }} <v-icon class="yellow--text" >{{ item.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>


    <v-navigation-drawer
      v-model="sideNav" dark width="200"
      fixed
      app  absolute class="teal darken-2"
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/80.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{nombre}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile class=""
          v-for="item in menuItems2" :key="item.title"  :to="item.link"
        >
          <v-list-tile-action>
            <v-icon class="yellow--text "  >{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
             }
            },
        computed: 
          {
              menuItems ()
               {
                 let menuItems = [
                  {icon: 'fas fa-user-plus', title: 'Registro', link: '/registerpage'},
                  {icon: 'fas fa-key', title: 'Ingreso', link: '/loginpage'}
                                ]
                return menuItems
               },
            
              menuItems2 () 
              {
                let menuItems2 = 
                 [
                 {icon: 'fas fa-users', title: 'usuarios', link: '/usuarios' },
                  {icon: 'fas fa-folder-open', title: 'Solicitudes', link: '/listasolicitudes' },
                  {icon: 'fas fa-microphone', title: 'Cultores', link: '/listaagrupaciones'},
                  {icon: 'fas fa-hand-holding-usd', title: 'Beneficios', link: '/listabeneficios'},
                  {icon: 'fas fa-newspaper', title: 'Noticias', link: '/listanoticias'},
                  {icon: 'fas fa-calendar-alt', title: 'Eventos', link: '/listaeventos'},
                 ]  
                
                return menuItems2
               }
            }
          }
</script>

