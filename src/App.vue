<template>
  <v-app>
    <barra/>
  
    <v-content>
      <router-view></router-view>
    </v-content>
  <foooter/>
  </v-app>
</template>

<script>
import barra from '@/components/barra'
import foooter from '@/components/foooter'
export default {
  components: { barra,foooter}
  
                }
</script>
