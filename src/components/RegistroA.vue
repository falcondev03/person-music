<template>
 <v-container mt-2>
    <v-layout row v-if="error">
      <v-flex xs12 sm12 offset-sm-4>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
  
    <v-layout row>
      <v-flex xs12 sm12 offset-sm3>
        <v-card class="elevation-24 mt-4" width="500px">
            <v-layout>
              <v-flex align-center>
                  <!-- <h1  class="display-1 mt-3 mx-3 font-weight-bold wrap text-xs-center  --text">Dirección de Cultura del Estado Sucre</h1> -->
                  <img src="/lo1.png" alt="" height="100" width="400" class="mr-5 ml-5 mt-5"
                  >
              </v-flex>
            </v-layout>
           <v-layout>
               <v-flex class="text-xs-center"  xs12 md12 sm12>
                  <h1  class="headline mt-3 mx-3 font-weight-bold teal--text  ">Registro de Agrupaciones y Artistas</h1>
     
               </v-flex>
                 </v-layout>
                 <!--  <v-layout>
                <v-flex class="text-xs-left"  xs12 md12 sm12>
                   <h1  class="title mt-3 ml-5 font-weight-bold "> Datos Laborales</h1>
               </v-flex>
           </v-layout> -->
            <v-card-text class=" text-xs-center font-weight-bold text-wrap display-1 mx-0  py-0">
            <v-container >
              <form @submit.prevent="onSignup">
                              <v-flex xs12 sm12 md12>  
                              <v-text-field
                                   name="nombre"
                                   id="nombre"
                                   label="* Nombre de la Agrupacion o Artista"
                                   v-model="nombre"
                                   required
                                                                  
                                  :rules="[v => !!v || 'Colocar el nombre de la agrupación o Artista:ejm Juan Gabriel, Los Melodicos']"
                                  :counter="40"
                                  prepend-icon="fas fa-user-tie"
                                  class="ml-4 mr-4">
                              </v-text-field>
                               </v-flex>
                                <v-flex xs12 sm12 md12>
                              <v-text-field
                                  name="seudonimo"
                                  id="nombre"
                                  v-model="seudonimo"
                                  label="* Seudónimo"
                                  required
                                  :rules="[v => !!v || 'Colocar el Seudonimo del artista, ejm El charro de oro']"
                                  :counter="40"
                                  prepend-icon="fas fa-user-tie"
                                  default
                                  class="ml-4 mr-4">
                              </v-text-field>
                               </v-flex>
                              <v-flex xs12 sm12 md12>
                                  <v-select
                                      name="grupo"
                                      id="grupo"
                                      :v-model="grupo"
                                      label="* Artista / Agrupacion"
                                      required
                                      :items="tipo"
                                      :rules="[v => !!v || 'Seleccione si Es Artista o Agrupación']"
                                      prepend-icon="fas fa-microphone-alt"
                                      class="ml-4 mr-4">
                                  </v-select>
                              </v-flex>
                              <template >
                                 <v-flex xs12 sm12 md12 >
                                  <v-text-field  
                                      name="integrantes"
                                      id="integrantes"
                                      v-model="integrantes"
                                      label="* Cantidad de Integrantes"
                                      required
                                      :items="tipo"
                                      :rules="[v => !!v || 'coloque la cantidad de integrantes de la orquesta']"
                                      prepend-icon="number"
                                      class="ml-4 mr-4">
                                  </v-text-field>
                              </v-flex>
                              </template>
                               
                              <v-flex xs12 sm12 md12>
                                  <v-select
                                      name="genero"
                                      v-model="genero"
                                      id="genero" 
                                      required
                                      label="* Genero Musical"
                                      :items="tipo1"
                                      :rules="[v => !!v || 'Seleccione el Género Musical']"
                                      prepend-icon="fas fa-music"
                                      class="ml-4 mr-4">
                                    </v-select>
                              </v-flex>
                            
                             <v-flex xs12 sm12 md12>
                              <v-text-field
                                  name="tlf"
                                  v-model="tlf"
                                  label="* Número de Teléfono"
                                  mask="phone"
                                  required
                                  id="tlf"
                                  prepend-icon="fas fa-phone-volume"
                                  class="ml-4 mr-4"
                                  :rules="[v => !!v || 'Coloque Número de teléfono']"
                                ></v-text-field>
                                
                                </v-flex>
                                <v-flex xs12 sm12>
                                    <v-text-field
                                    name="email"
                                    id="email"
                                    v-model="email"
                                    label="* Correo Electronico"
                                    required
                                    :rules="emailRules"
                                    type="email"
                                    class="ml-4 mr-4"
                                    prepend-icon="fas fa-at"
                                    >
                                  </v-text-field>
                                  </v-flex>
                    
                                  <v-flex xs12 sm12>
                                      <v-textarea
                                          name="direccion"
                                          v-model="direccion"
                                          id="direccion"
                                          label="* Dirección"
                                          required

                                          auto-grow
                                          class="ml-4 mr-4"
                                          :rules="[v => !!v || 'Coloque una dirección']"
                                          rows="1"
                                          prepend-icon="fas fa-street-view"
                                        ></v-textarea>
                                      </v-flex>
                                      <v-layout row><v-flex sm12 md12 xs12 lg12 class="text-xs-left">
                                        <v-chip  label  class="grey lighten-2 ">
                                         <v-icon left>label</v-icon> Fotos:
                                        </v-chip>
                                      </v-flex></v-layout>
                                      <template>
                                        <div class="container fluid" height="500px" >
                                            <v-layout row >
                                              <v-flex>
                                                <v-responsive class="pt-3">
                                                     <img :src=src alt="" height="50"> 
                                                </v-responsive>
                                                <v-btn round>
                                                    Foto Ppal
                                                </v-btn>
                                              </v-flex>


                                               <v-flex>
                                                <v-responsive class="pt-3">
                                                     <img :src=src alt="" height="50"> 
                                                </v-responsive>
                                                <v-btn round elevation-24>
                                                    Foto # 1
                                                </v-btn>
                                              </v-flex>

                                               <v-flex>
                                                <v-responsive class="pt-3">
                                                     <img :src=src alt="" height="50"> 
                                                </v-responsive>
                                                <v-btn round elevation-24>
                                                    Foto # 2
                                                </v-btn>
                                              </v-flex>
                                           </v-layout>
                                        </div>
                                      </template>

                                      <v-flex xs12 sm12 md12 lg12>
                                        <h1 class=" body-2 text-xs-left font-weight-bold">*Todos los Datos son requeridos</h1>
                                    </v-flex>
                               <v-card-actions class="">
                                  <v-layout row>
                                          <v-flex xs12  sm12 md12 lg12 class="mx-4 mb-3">
                                            <router-link to="/" tag="span" style="cursor: pointer"><v-btn round class="small grey lighten-2 mr-3 ml-2 "  @click="datos = false">
                                              <v-icon small left>
                                              fas fa-times-circle
                                              </v-icon>Cancelar
                                            </v-btn>
                                            </router-link>
                                                  <v-btn round class="teal darken-4 ml-3 mr-3 small white--text"  @click="datos1=!datos1">
                                                
                                                    Guardar <v-icon class="ml-2" small right>
                                                      fas fa-save
                                                    </v-icon>
                                                  </v-btn>
                                                   
                                              </v-flex>
                                      </v-layout>
                              </v-card-actions>         

                         <!-- modal de mostrar datos -->
                                <v-dialog  v-model="datos1" persistent width="550px">
            <v-card>
              
              <v-layout row>
                <v-flex xs12 sm12 md12  lg12>
                    <v-card-title class="text--xs--center">
                      <v-layout row>
                    <v-flex sm12 md12 xs12 lg12 class="mt-0 text-xs-right">
                        <v-btn round @click="datos1 = false" class="font-weight-bold"
                            flat> Cerrar
                          <v-icon >
                          close
                          </v-icon> 
                          </v-btn>
                    </v-flex>
                </v-layout>
                      <h1 class=" px-5 mx-5 headline font-weight-bold">
                    REGISTRO EXITOSO..
                      </h1>

                  </v-card-title>
                </v-flex>
              </v-layout>
             <v-card-text>
            
                <v-layout><v-flex class="mb-1 mt-0">
                <h1 class="title font-weight-bold mb-1" v-if="grupo=== 'Artista'" >Nombre del Artista : {{nombre}}</h1>
                <h1 class="title font-weight-bold mt-1 mb-1" v-else>Nombre de la Agrupación : {{nombre}}</h1>
                </v-flex></v-layout>
                <v-layout><v-flex class="mb-1 mt-1">
                    <h1 class="title  font-weight-bold">Teléfono: {{tlf}}</h1>
                </v-flex></v-layout>
                <v-layout><v-flex class="mb-1 mt-1">
                    <h1 class="title font-weight-bold">Email : {{email}}</h1>
                </v-flex></v-layout>
                <br> 
                <hr>
                <br>
                <v-layout><v-flex>
                    <P class="font-weight-bold title text--xs-center">
                    Ud tiene 15 días hábiles para formalizar su solicitud en la oficina principal de nuestra organización
                    </P>
                </v-flex></v-layout>
                
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-layout><v-flex>
            <router-link to="/loginpage" tag="span" style="cursor: pointer">   <v-btn round class="success ml-5 mr-5 elevation-28 mb-2"  @click="datos1=!datos1">
                            <v-icon small class="mr-1">
                                fas fa-user-check
                            </v-icon >
                            Continuar
                            </v-btn>
                            </router-link >
                </v-flex></v-layout>
        </v-card-actions>
        </v-card>
</v-dialog>
                     </form>
                   </v-container>
              </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

</v-container>
</template>

<script>
import RegistroA from '@/components/RegistroA'
export default {
  components:{
   RegistroA
  },
   data: () => ({
        nombre:'',seudonimo:'',artista:'',genero:'',tlf:'',email:'',direccion:'',imageurl:'',imageurl1:'',imageurl2:'',
        datos:false,
        datos1:false,
        visible:false,
        visible200:false,
        tipo:['Artista', 'Agrupación'],
        tipo1:['Merengue', 'Salsa','Balada','Rock','Reguetton','Pop','Reggae'],
        emailRules: [
            v => !!v || 'El Correo es Obligatorio',
            v => /.+@.+/.test(v) || 'El Correo debe estar correcto'
          ]
    })
    
  }

</script>
<style scoped>

</style>

