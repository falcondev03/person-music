<template>
    <div>
     <v-layout row>
        <v-flex xs7  sm7  md7 lg7   class="mt-5" text-xs-center>
          <h1>Lista de Agrupaciones y Artistas</h1>
        </v-flex>
       <v-flex xs2  sm2  md2 lg2   class="mt-2" text-xs-center>
         
        </v-flex>
        <v-flex xs3 sm3 md3 lg3  class="my-4" text-xs-left>
       <v-text-field
        v-model="search"
        append-icon="fas fa-search"
        label="Buscar"
        double-line
        hide-details
        class="mr-2 px-24"
        width="5px"
      ></v-text-field>
          
        </v-flex>
        </v-layout>
       
         <tarjetas/>
    </div>
</template>
<script>
import tarjetas from '@/components/tarjetas'
/* import RegistroA from '@/components/RegistroA' */
export default {
    components:{
        tarjetas/* ,RegistroA */
    }
}
</script>
