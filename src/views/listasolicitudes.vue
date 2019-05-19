<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm12 md12>
                <h1 class="text-xs-center text-xs-center display-1 font-weight-bold">Solicitudes Enviadas</h1>
                 </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex>
                 <v-tabs
                        icons-and-text 
                        centered height="48"
                        color="teal darken-2"
                        grow
                        dark
                        >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab class="body-2 elevation-24" medium v-for="item in menuItems2" :key="item.title"  :to="item.link">
                            {{ item.title }} <v-icon medium class="yellow--text">{{ item.icon }}</v-icon>
                        </v-tab>
                        </v-tabs>
                 </v-flex>
           
        </v-layout>

    </v-container>
</template>
<script>
  export default {
        computed: 
          {
                       
              menuItems2 () 
              {
                let menuItems2 = 
                 [
                  {icon: 'fas fa-guitar', title: 'Agrupaciones', link: ''}, 
                  {icon: 'fas fa-users', title: 'Usuarios', link: '' },
                  {icon: 'fas fa-calendar-alt', title: 'Eventos', link: ''},
                  
                 ]  
                
                return menuItems2
               }
            }
          }
</script>

