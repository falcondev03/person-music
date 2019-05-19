<template>
  <nav>
       <v-toolbar app dark class="teal darken-4 elevation-20" height="75" tabs>
     <v-toolbar-side-icon @click="sideNav = !sideNav"  ></v-toolbar-side-icon>

      <v-toolbar-title> <router-link to="/" tag="span" style="cursor: pointer">
        <span class="yellow--text display-2">S</span>
        <span class="yellow--text display-2">G</span>
        <span class="white--text display-1" >artes</span>
        
        </router-link></v-toolbar-title>

      <v-spacer class="hidden-xs-only" ></v-spacer>

              <v-toolbar-items class="hidden-xs-only" >
                <v-btn
                  flat
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.link" class="subheading">
              
                  {{ item.title }} 
                   <v-icon right dark medium class="yellow--text hidden-xs-only">exit_to_app</v-icon>
                </v-btn>
               
              </v-toolbar-items>

        </v-toolbar>


    <v-navigation-drawer
      v-model="sideNav" dark width="280"
      fixed
      app  absolute class="teal darken-2"
      >
         <v-layout class=" mt-2 column align-center">
             <v-flex>
               <v-avatar>
                <img src="https://randomuser.me/api/portraits/men/80.jpg" class="mt-2 ">
              </v-avatar>
             </v-flex>
             <v-flex>
                 <h1 class="my-2 white--text headline">{{nombre}}</h1>
             </v-flex>
            </v-layout>

              
             
            <v-layout column class="align-left   ">
              <v-flex>
                 <v-btn   
                      :loading="loading" 
                      :disabled="loading"
                     
                      @click="loader = 'loading'"
                      class="  primary flat ml-5 large subheading my-3 mx-3 white--text">
                    <v-icon left>
                         home
                    </v-icon >
                     Home
                 </v-btn>
              </v-flex>
              <v-flex>
              
                        <v-menu offset-x>
                          <template v-slot:activator="{ on }">
                            <v-btn 
                             class="primary ml-5 large white--text my-3 mx-3"
                              dark
                              v-on="on" 
                            > <v-icon left>
                  home
                </v-icon >
                              Solicitudes
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-tile
                              v-for="(item, index) in menuItems3"
                              :key="index"

                            >
                              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                     
                
              </v-flex>
              <v-flex>
                  
                        <v-menu offset-x>
                          <template v-slot:activator="{ on }">
                            <v-btn 
                              class="primary ml-5 large white--text my-3 mx-3"
                              dark
                              v-on="on" 
                            
                            >
                              <v-icon left>
                  home
                </v-icon > Cultores
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-tile
                              v-for="(item, index) in menuItems4"
                              :key="index"

                            >
                              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                     
               </v-flex>
              <v-flex>
                <v-btn   class="primary ml-5 large  white--text subheading title my-3 mx-3">   <v-icon left>
                  home
                </v-icon >Beneficios</v-btn>
              </v-flex>
              <v-flex>
                
                <v-btn  class="ml-5 large primary white--text subheading title my-3 mx-3"><v-icon small left>
                fas fa-bullhorn
                </v-icon >Noticias</v-btn>
              </v-flex>
              <v-flex>
                <v-btn   class="ml-5 large primary white--text subheading title my-3 mx-3">   <v-icon left>
                  home
                </v-icon >Eventos</v-btn>
              </v-flex>
            </v-layout>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
           
            
          </v-list>
        </v-toolbar>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default 
  {
    data () {
      return {
        sideNav: false,
        nombre:'Yixon Anuel',
         loader: null,
        loading: false
             }
            },
             watch: {
                loader () {
                  const l = this.loader
                  this[l] = !this[l]

                  setTimeout(() => (this[l] = false), 2000)

                  this.loader = null
                }
              },
        computed: 
          {
              menuItems ()
               {
                 let menuItems = [
                  {icon: 'fas fa-lock', title: 'Cerrar Sesión', link: '/home'},
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
               },
            
              menuItems3 () 
              {
                let menuItems3 = 
                 [
                  {icon: 'home', title: 'Usuarios', link: '/'}, 
                  {icon: 'music_note', title: 'Agrupaciones', link: '/listasolicitudes' },
                  {icon: 'music_note', title: 'Eventos', link: '/listaagrupaciones'},
                  {icon: 'card_giftcard', title: 'Noticias', link: '/listabeneficios'},
                 
                 ]  
                
                return menuItems3
               },
            
              menuItems4 () 
              {
                let menuItems4 = 
                 [
                  {icon: 'home', title: 'Artistas', link: '/'}, 
                  {icon: 'music_note', title: 'Agrupaciones', link: '/listasolicitudes' },
                 ]  
                
                return menuItems4      
           }
          }
  }
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
