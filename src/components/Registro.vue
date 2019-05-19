<template>
  <v-container mt-5>
    <v-layout row v-if="error">
      <v-flex xs12 sm12 offset-sm-4>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
   
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="elevation-15" >
           <v-layout>
      <v-flex class="text-xs-center my-0"  s12 md12 sm12>
         <v-card-title primary-title class="text-xs-center font-weight-medium text-wrap display-1 mx-5 mt-1 pb-0 ">
           <p >Registro de Usuarios</p>
       
         </v-card-title>
      </v-flex>
    </v-layout>
            <v-card-text class=" text-xs-center font-weight-bold text-wrap display-1 mx-1 py-0 my-0">
            <v-container >
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="nombre"
                      label="Nombre"
                      id="nombre"
                      v-model="nombre"
                      type="text"
                      prepend-icon="fas fa-user-tie"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                 <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="apellido"
                      label="Apellido"
                      id="apellido"
                      v-model="apellido"
                       prepend-icon="fas fa-user-circle"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row class=" text-xs-center font-weight-bold text-wrap display-1 mx-0 py-0">
                  <v-flex xs12 md12 sm12>
                    <v-text-field
                      :name="email"
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
                      name="password"
                      label="Contraseña"
                      id="password"
                      v-model="password"
                      type="password"
                       prepend-icon="fas fa-key"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirmar Contraseña"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                       prepend-icon="fas fa-key"
                      :rules="[comparePasswords]"></v-text-field>
                      
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 align-center>
                    <v-btn  class="grey lighten-2" type="submit" @click="limpiar()">
                         <v-icon small left>
                      fas fa-times-circle
                      </v-icon>Cancelar
                       <span slot="loader" class="custom-loader">
                        <v-icon  color="green">light</v-icon>
                       </span>
                    </v-btn>
                  </v-flex>
                    <v-flex xs12 md12 sm12 class="mx-3">
                   <v-btn class="teal darken-4" dark  @click="datos = false">
                      <v-icon small left>
                        fas fa-save
                       
                      </v-icon>
                      Guardar</v-btn>
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
import Login from '@/components/Registro'
export default {
    components:{
    Login
},
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
      computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Contraseña no coincide' : ''
      },
       limpiar() {
         return
         {
           this.email=''
        this.password=''
        this.confirmPassword=''
         }
       
      }
    }
      
    }
</script>