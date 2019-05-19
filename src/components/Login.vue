<template>
  <v-container mt-2>
    <v-layout row v-if="error">
      <v-flex xs12 sm12 offset-sm-4>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
   
    <v-layout row>
      <v-flex xs12 sm12 offset-sm3>
        <v-card class="elevation-24" width="570px">
           <v-layout>
      <v-flex class="text-xs-center"  xs12 md12 sm12>
         <v-card-title primary-title class="text-xs-center font-weight-medium text-wrap display-1 ml-5 px-5 mt-3-0 py-0 mr-5 ">
           <h1  class="display-1 mt-3 mx-3 font-weight-bold teal--text">Ingreso de Usuarios</h1>
         </v-card-title>
      </v-flex>
    </v-layout>
            <v-card-text class=" text-xs-center font-weight-bold text-wrap display-1 mx-0  py-0">
            <v-container >
              <form @submit.prevent="onSignup">
                <v-layout row class=" text-xs-center font-weight-bold text-wrap display-1 mx-0 py-0">
                  <v-flex xs12 md12 sm12 >
                    <v-text-field
                     :rules="emailRules"
                      :name="email"
                      class="my-0"
                      label="Correo Electronico"
                      id="email"
                      v-model="email"
                      type="email"
                        prepend-icon="fas fa-at"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      :name="password"
                      :rules="passwordRules"
                      label="Contraseña"
                      :append-icon="show1 ? 'visibility' : 'visibility_off'"
                      id="password"
                      v-model="password"
                     
                        prepend-icon="fas fa-key"
                        class="campo mt-0 mb-3"
                         :type="show1 ? 'text' : 'password'"
                             @click:append="show1 = !show1"
                      required></v-text-field>
                   
                  </v-flex>
                </v-layout>
                              <v-layout row>
                  <v-flex xs12 align-center class="mx-3">
                    <v-btn  round class="grey lighten-2" type="submit" @click="limpiar()">
                        <v-icon small left>
                      fas fa-times-circle
                      </v-icon>Cancelar
                       <span slot="loader" class="custom-loader">
                        <v-icon >light</v-icon>
                       </span>
                    </v-btn>
                  </v-flex>
                    <v-flex xs12 md12 sm12>
                    <v-btn round class="" color="teal darken-4" dark type="submit">
                     Ingresar <v-icon small right>
                         fas fa-sign-in-alt
                      </v-icon>
                       <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
   
    data () {
      return {
         password: '',
         email: '',
          
          emailRules: [
            v => !!v || 'El Correo es Obligatorio',
            v => /.+@.+/.test(v) || 'El Correo debe estar correcto'
          ], 
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
       passwordRules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 15 || 'Min 15 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
     }
    }

</script>
<style scoped>
.campo .prepend-icon
{
color:red;
}
</style>
