<template>
 <div>
     <v-layout>
    <v-flex>
        <h1 class="display-1 text-xs-center mt-4 font-weight-black">Complete su Registro</h1>
    </v-flex>
</v-layout>
<!-- paso 1 -->
  <v-stepper v-model="e6" vertical class="my-0">
                 <v-stepper-step class="teal"  :complete="e6 > 1" step="1">
                     <h1 class="title yellow--text">Actualiza tu Correo y clave 
                    </h1>
                  </v-stepper-step>
                     <!-- modulo 1 -->
                     <v-stepper-content step="1" class="mt-0">
                      <!-- modulo de cambio de contraseña -->
                        <actcontrase/>
                      <v-btn 
                          round class="grey lighten-2 my-3 " 
                          flat >
                               Cancelar
                               <v-icon 
                                  small right>
                                       fas fa-times-circle
                                </v-icon>
                        </v-btn>
                      <v-btn
                          round 
                          color="teal darken-4" 
                          dark @click="e6 = 2"
                          class="my-3"
                       >Siguiente
                      </v-btn>
                      </v-stepper-content>
                                    
                       <!-- modulo 2 -->
                      <v-stepper-step class="teal"  :complete="e6 > 2" step="2">
                          <h1 class="title yellow--text">Completa los Datos De tu Registro 
                          </h1>
                      </v-stepper-step>
                        <v-stepper-content step="2">
                            <RegistroA/>
                          <v-btn 
                          round class="grey lighten-2 my-3" 
                          flat >
                               Anterior
                               <v-icon 
                                  small right>
                                       fas fa-times-circle
                                </v-icon>
                        </v-btn>
                      <v-btn
                          round 
                            class="my-3"
                          color="teal darken-4" 
                          dark @click="e6 = 3"
                       >Siguiente
                      </v-btn>
                        </v-stepper-content>
                     
                     
                     
                       <!-- modulo 1 -->
                      <v-stepper-step class="teal "  :complete="e6 > 3" step="3">
                           <h1 class="title yellow--text">Ingresa tus Redes Sociales</h1
                      ></v-stepper-step>
                      <v-stepper-content step="3">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                     <v-btn 
                          round class="grey lighten-2 my-3" 
                          flat @click="e6 = 2" >
                               Cancelar
                               <v-icon 
                                  small right>
                                       fas fa-times-circle
                                </v-icon>
                        </v-btn>
                      <v-btn
                          round 
                          color="teal darken-4" 
                          dark @click="e6 = 4"
                            class="my-3"
                       >Continuar
                      </v-btn>
                      </v-stepper-content>
                    
                    
                     <!--  modulo 4 -->
                      <v-stepper-step step="4" class="teal" >
                        <h1 class="title yellow--text">Contrato Laboral </h1>
                      </v-stepper-step>
                      <v-stepper-content step="4">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                         <v-btn 
                          round class="grey lighten-2 my-3" 
                          flat @click="e6 = 3" >
                               Anterior
                               <v-icon 
                                  small right>
                                       fas fa-times-circle
                                </v-icon>
                        </v-btn
                        >
                      <v-btn
                         class="my-3"
                          round 
                          color="teal darken-4" 
                          dark @click="e6 = 1"
                       >Finalizar
                      </v-btn>
                      </v-stepper-content>
        </v-stepper>
        </div>
</template>
<script>
import actcontrase from '@/components/actcontrase'
import RegistroA from '@/components/RegistroA'
export default {
      components:
      {
          actcontrase,RegistroA
      },
    data () {
      return {
        e6: 1
      }
    }
  }
</script>