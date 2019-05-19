<template>
  <div class="about">
      <v-layout>
       <v-flex class="text-xs-center mt-5 font-weight-bold text-wrap display-1" xs12 md12 sm12>
        <h1 class="display-1 font-weight-bold">Bienvenido al Sistema.</h1>
      </v-flex>
    </v-layout>
  <Login/>
  </div>
</template>
<script>
import Login from '@/components/Login'
export default {
  components:{
    Login
}
}
</script>
