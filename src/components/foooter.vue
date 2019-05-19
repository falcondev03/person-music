<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal darken-4">
       <v-layout>
         <v-flex sm12 xs12 md12 lg12 class=" text-xs-center">
             <strong class="title white--text ">
          ¡ Siguenos en nuestras redes sociales !</strong>
          </v-flex>
       </v-layout>
       <v-layout>
         <v-flex sm12 xs12 md12 lg12 class=" text-xs-center">
          <v-spacer></v-spacer>
           <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-3 yellow--text text-xs-center"
                dark
                icon 
              >
          <v-icon class="text-xs-center" size="24px">{{ icon }}</v-icon>
        </v-btn>
         </v-flex>
       </v-layout>
        
      </v-card-title>

      <v-card-actions class="teal darken-3 justify-center">
        <strong class="title white--text hidden-xs-and-down">&copy;2019 —</strong> <strong class="title white--text">Software Designer Venezuela</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-instagram'
      ]
    })
  }
</script>
<style scoped>

</style>
