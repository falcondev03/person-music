<template>

    <div id="tarjetas">
       
          <v-layout row wrap>
                          <v-flex  xs12 sm6 md4 lg4 v-for="item in grupos" :key="item.id" >
                            
                                  <v-card  class="text-xs-center ma-3 elevation-24 my-1" :search="search"  >
                                <v-responsive class="pt-3">
                                    <!-- teal accent-2 -->
                                        <img :src="item.foto" :alt="item.nombre" :title="item.nombre" height="100" >
                                </v-responsive>

                                <v-card-text class="mb-0 my-0">
                                          <h1 class="subheading font-weight-bold text-uppercase"> {{ item.nombre }}</h1>         
                                          <p class="text-capitalize"> {{ item.tipo }}</p>
                                </v-card-text>
                                
                                <v-card-actions>
                                   <v-layout row>
                                       <v-flex x12 sm12 md12 lg12 class="text-xs-center my-3">
                                            <v-btn  @click="datos2=!datos2" fab dark small  class=" elevation-24 teal darken-4  ">
                                                <v-icon class="yellow--text"  dark>fas fa-eye</v-icon>
                                            </v-btn>
                                            <v-btn   @click="datos3=!datos3" fab dark small class=" elevation-24 teal darken-4 ">
                                                 <v-icon class="yellow--text" dark>fas fa-tasks</v-icon>
                                            </v-btn> 
                                             <v-btn @click="datos7=!datos7" fab dark small class=" elevation-24 teal darken-4 ">
                                                 <v-icon class="yellow--text" dark>fas fa-user-lock</v-icon>
                                            </v-btn> 
                                       </v-flex>

                                   </v-layout>
                                   
                                </v-card-actions>
                          </v-card>
                        
                      </v-flex>
                  </v-layout>

                  <!-- dialogo para visuaizar inf de las tarjetas -->
                  <v-dialog v-model="datos2" persistent width="500">
                        <v-layout>
                        <v-flex>
                             <v-card>
                                   <v-layout> <v-flex class="text-xs-right">
                                          <v-btn  flat @click="datos2=false">
                                               
                                                <v-icon>close</v-icon>
                                            </v-btn>
                                    </v-flex></v-layout>
                                 <v-card-text>
                                     <v-layout>
                                          <v-flex class="text-xs-center">
                                                <v-responsive class="pt-3">
                                                     <img :src=src alt="" height="20"> 
                                                     <h1 class="title">aqui va la foto</h1>
                                                </v-responsive>
                                               
                                              </v-flex>
                                     </v-layout>
                                     <v-layout><v-flex> <h1 class="title font-weight-bold my-2">Nombre:</h1>
                                         </v-flex></v-layout>
                                     <v-layout><v-flex> <h1 class="title font-weight-bold my-2 ">Seudonimo:</h1>
                                         </v-flex></v-layout>
                                          <v-layout><v-flex> <h1 class="title font-weight-bold my-2 ">Tipo:</h1>
                                         </v-flex></v-layout>
                                          <v-layout><v-flex> <h1 class=" my-2 title font-weight-bold">Genero:</h1>
                                         </v-flex></v-layout>   
                                          <v-layout><v-flex> <h1 class="title font-weight-bold my-2 ">Teléfono:</h1>
                                         </v-flex></v-layout>
                                          <v-layout><v-flex> <h1 class="title font-weight-bold my-2 ">Correo:</h1>
                                         </v-flex></v-layout>
                                          <v-layout><v-flex> <h1 class=" my-2 title font-weight-bold">Dirección:</h1>
                                         </v-flex></v-layout>   
                                 </v-card-text>
                                 <v-card-actions>
                                    <v-layout> <v-flex class="text-xs-center rounded">
                                          <v-btn round class="teal darkrn-4" dark flat @click="datos2=false">
                                                <v-icon left class="ml-1 mr-1">fas fa-times
                                                    </v-icon> 
                                                 Cerrar
                                      </v-btn>
                                    </v-flex></v-layout> 
                                    
                                 </v-card-actions>
                             </v-card>
                        </v-flex>
                        </v-layout>
                        
                <v-layout>
                    
                </v-layout>
                  </v-dialog>
                  <!-- dialogo para la evaluacion de la solicitud -->
                   <v-dialog v-model="datos3" persistent width="700" height="700">
                        <v-layout>
                        <v-flex>
                             <v-card>
                                   <v-layout> <v-flex class="text-xs-right mt-3">
                                          <v-btn  flat @click="datos3=false">
                                              
                                                <v-icon>close</v-icon>
                                            </v-btn>
                                    </v-flex></v-layout>
                                    <v-card-title><v-flex></v-flex>
                                         <h1 class="headline font-weight-bold ">Evaluación de la Solicitud</h1>
                                         <br>
                                        <v-layout></v-layout>
                                         
                                    </v-card-title>
                                 <v-card-text>
                                     
                                     <v-layout><v-flex sm12 xs12 md6> <h1 class="title font-weight-bold mt-1 mb-3">Nombre: <span class="teal--text ml-2"> 3 Bollos y un Arenque</span> </h1>
                                         </v-flex></v-layout>
                                     <v-layout><v-flex> <h1 class="title font-weight-bold my-3 ">Género Musical: <span class="teal--text ml-2">Cantan de todo</span> </h1>
                                         </v-flex></v-layout>
                                 
                                 <v-layout row>
                                     <v-flex sm7 xs7 md7>
                                             <h1 class="title font-weight-bold my-3 ">Dirección:<span class="teal--text ml-2">Anaco Edo Anzoategui</span> </h1>
                                     </v-flex>
                                    <v-flex sm5 xs5 md5>
                                             <rating/>
                                        </v-flex>
                                 </v-layout>
                                   <v-layout row>
                                    <v-flex sm7 xs7 md7>
                                            <h1 class="title font-weight-bold mt-3 ">Fotos:</h1>

                                     </v-flex>
                                      <v-flex sm5 xs5 md5>
                                         <rating/>
                                        </v-flex>
                                   </v-layout>
                                   <v-layout row>
                                       <v-flex xs12 >
                                            <template>
                                        <div class="container fluid" height="500px" >
                                            <v-layout row  class="mx-5 px-2">
                                              <v-flex>
                                                <v-responsive class="pt-0">
                                                     <img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" alt="" height="150" width="150"> 
                                                </v-responsive>
                                                 <p class="mx-5 font-weight-bold body-2">
                                                    Foto Ppal
                                                </p>
                                              </v-flex>


                                               <v-flex>
                                                <v-responsive class="pt-0">
                                                     <img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" alt="" height="150" width="150"> 
                                                </v-responsive>
                                                <p class="mx-5 font-weight-bold body-2">
                                                    Foto # 1
                                               </p>
                                              </v-flex>

                                               <v-flex>
                                                <v-responsive class="pt-0">
                                                     <img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"  alt="" height="150" width="150"> 
                                            <!--          -- http://misimagenesde.com/wp-content/uploads/2013/04/imagenes-de-cantantes-2.jpg -->
                                                </v-responsive>
                                                <p class="mx-5 font-weight-bold body-2">
                                                    Foto # 2
                                                </p>
                                              </v-flex>
                                           </v-layout>
                                        </div>
                                      </template>
                                        </v-flex>
                                       
                                   </v-layout>
                                    <v-layout>
                                        <v-flex>  
                                            <label  v-if="visible!==false" class="headline font-weight-bold" for="">Recomendaciones o Sugerencias: </label>
                           
                                        </v-flex>
                                    </v-layout>
                                     <v-layout>
                                        <v-flex>       <textarea v-if="visible!==false" name="sugerencias" id="sugerencias" cols="90" rows="4" forecolor="red"></textarea>
                                        </v-flex>
                                    </v-layout>
                                 </v-card-text>
                                 <v-card-actions>
                                    <v-layout> <v-flex class="text-xs-center rounded">
                                          <v-btn   round v-if="visible!==false" class="grey lighten-2 ml-3 mb-3"  flat @click="visible=false, visible2=true">
                                             <v-icon left class="mr-1">fas fa-arrow-alt-circle-left
                                                 </v-icon> Regresar
                                          </v-btn>
                                            <v-btn round  v-if="visible!==false" class="success ml-3 mb-3" dark flat @click="datos4=true">
                                                
                                              Continuar<v-icon right class="ml-1">fas fa-arrow-alt-circle-right</v-icon>
                                          </v-btn>
                                          <v-btn round class="success mb-3 mr-3" v-if="visible2===true"  dark flat @click="visible=true, visible2=false">
                                              Continuar <v-icon right class="ml-1">fas fa-arrow-alt-circle-right</v-icon>
                                          </v-btn>
                                       
                                    </v-flex></v-layout> 
                                    
                                 </v-card-actions>
                             </v-card>
                        </v-flex>
                        </v-layout>
                        
                <v-layout>
                    
                </v-layout>
                  </v-dialog>
             <!-- dialogo para aprobar la solicitud -->
                  <v-dialog v-model="datos4" persistent width="500">
                     <v-card>

                         <v-layout> 
                             <v-flex class="text-xs-right mt-3">
                                <v-btn  flat @click="datos4=false">Cerrar<v-icon>close</v-icon></v-btn>
                             </v-flex>
                         </v-layout>
                         <v-card-title>
                             <v-layout>
                                 <v-flex>
                                       <h1 class="headline font-weight-bold mb-0 text-xs-center teal white--text">Resultados de la Evaluación</h1>
                                       <hr color="teal">
                                      <h1 class="mt-3 title font-weight-bold text-capitalize"> Puntaje por la Ubicación: Aqui van los puntos</h1>
                                      <h1 class="mt-3 title font-weight-bold text-capitalize"> Puntaje por las Fotos: Aqui van los puntos</h1>
                                      <h1 class="mt-3 title font-weight-bold text-capitalize"> Puntaje el Demo: Aqui van los puntos</h1>
                                      <h1 class="mt-3 title font-weight-bold text-capitalize"> Total: Aqui van los puntos</h1>
                                 </v-flex>
                             </v-layout>
                                
                                <hr color="grey lighten-1">
                         </v-card-title>
                         <v-card-text>
                                <v-icon>
                                    fab fas-answer
                                </v-icon>

                                <h1 class="headline font-weight-bold mb-0 text-xs-center">Seleccione el Estatus Final de la solicitud</h1>
                         </v-card-text>
                        
                         <v-card-actions>
                             <v-layout class="mx-3 my-3 text-xs-center">
                                 <v-flex>
                                     <v-btn round class="error mr-3" @click="datos6=true" >
                                         <v-icon left class="mr-1">fas fa-user-times</v-icon>Rechazada
                                     </v-btn>
                                
                                     <v-btn round class="success ml-3" @click="datos5=true">
                                         Aprobada <v-icon right class="ml-1">fas fa-user-check</v-icon>
                                     </v-btn>
                                 </v-flex>
                             </v-layout>
                         </v-card-actions>
                     </v-card>
                  </v-dialog>




                   <!-- dialogo para aprobar la solicitud -->
                  <v-dialog v-model="datos5" persistent width="300">
                     <v-card>

                         <v-layout> 
                             <v-flex class="text-xs-right mt-3">
                                <v-btn  flat @click="datos5=false">Cerrar<v-icon>close</v-icon></v-btn>
                             </v-flex>
                         </v-layout>
                               <v-card-text>
                                   <v-layout>
                                       <v-flex class="text-xs-center">
                                           <v-icon large class="icono" color="teal" style="">
                                                fas fa-check-circle
                                            </v-icon>
                                       </v-flex>
                                   </v-layout>
                                   <h1 class="headline font-weight-bold mb-0 text-xs-center">Su solicitud ha sido Aceptada. Bienvenido..!!!</h1>
                                </v-card-text>
                        
                         <v-card-actions>
                             <v-layout class=" text-xs-center">
                                 <v-flex>
                                     <v-btn round class="primary mb-3 " @click="datos5=false" >
                                        <v-icon left class="ml-0 mr-1">fas fa-check</v-icon>Aceptar
                                     </v-btn>
                                 </v-flex>
                             </v-layout>
                         </v-card-actions>
                     </v-card>
                  </v-dialog>
                      <!-- dialogo para reprobar la solicitud -->
                  <v-dialog v-model="datos6" persistent width="300">
                     <v-card>

                         <v-layout> 
                             <v-flex class="text-xs-right mt-3">
                                <v-btn  flat @click="datos6=false">Cerrar<v-icon>close</v-icon></v-btn>
                             </v-flex>
                         </v-layout>
                               <v-card-text>
                                   <v-layout>
                                       <v-flex  class="text-xs-center">
                                           <v-icon large class="" color="red">
                                             fas fa-times-circle
                                             </v-icon>
                                       </v-flex>
                                   </v-layout>
                                   <h1 class="headline font-weight-bold mb-0 text-xs-center">Lo Sentimos, Su solicitud ha sido Rechazada.</h1>
                                </v-card-text>
                        
                         <v-card-actions>
                             <v-layout class=" text-xs-center">
                                 <v-flex>
                                     <v-btn round class="primary mb-3 " @click="datos6=false" >
                                        <v-icon left class="ml-0 mr-1">fas fa-check</v-icon>Aceptar
                                     </v-btn>
                                 </v-flex>
                             </v-layout>
                         </v-card-actions>
                     </v-card>
                  </v-dialog>




                  <!-- dialogo para suspender artista -->
                  <v-dialog v-model="datos7" persistent width="300">
                     <v-card>

                         <v-layout> 
                             <v-flex class="text-xs-right mt-3">
                                <v-btn  flat @click="datos7=false">Cerrar<v-icon>close</v-icon></v-btn>
                             </v-flex>
                         </v-layout>
                               <v-card-text>
                                   <v-layout>
                                       <v-flex class="text-xs-center">
                                           <v-icon large class="icono" color="teal" style="">
                                                fas fa-question-circle
                                            </v-icon>
                                       </v-flex>
                                   </v-layout>
                                   <h1 class="headline font-weight-bold mb-0 text-xs-center">Desea suspender a este Artista / Agrupacion..?</h1>
                                </v-card-text>
                        
                         <v-card-actions>
                             <v-layout class=" text-xs-center">
                                 <v-flex>
                                     <v-btn round class=" error mb-3 white--text " @click="datos9=true" >
                                        <v-icon left class="ml-0 mr-1">fas fa-times-circle</v-icon>No
                                     </v-btn>
                                 </v-flex>
                                   <v-flex>
                                     <v-btn round class="primary mb-3 " @click="datos8=true" >
                                        <v-icon left class="ml-0 mr-1">fas fa-check</v-icon>Si
                                     </v-btn>
                                 </v-flex>
                             </v-layout>
                         </v-card-actions>
                     </v-card>
                  </v-dialog>

                    <!-- dialogo para la opcion si en suspender  artista -->
                  <v-dialog v-model="datos8" persistent width="300">
                     <v-card>

                         <v-layout> 
                             <v-flex class="text-xs-right mt-3">
                                <v-btn  flat @click="datos8=false">Cerrar<v-icon>close</v-icon></v-btn>
                             </v-flex>
                         </v-layout>
                               <v-card-text>
                                   <v-layout>
                                       <v-flex class="text-xs-center">
                                           <v-icon large class="icono" color="yellow">
                                                fas fa-info
                                            </v-icon>
                                       </v-flex>
                                   </v-layout>
                                   <h1 class="headline font-weight-bold mb-0 text-xs-center">El Artista / Agrupación ha sido Suspendido</h1>
                                </v-card-text>
                        
                         <v-card-actions>
                             <v-layout class=" text-xs-center">
                                  <v-flex>
                                     <v-btn round class="primary mb-3 " @click="datos8=false" >
                                        <v-icon left class="ml-0 mr-1">fas fa-check</v-icon>Aceptar
                                     </v-btn>
                                 </v-flex>
                             </v-layout>
                         </v-card-actions>
                     </v-card>
                  </v-dialog>
                      <!-- dialogo para la opcion no en suspender  artista -->
                  <v-dialog v-model="datos9" persistent width="300">
                     <v-card>

                         <v-layout> 
                             <v-flex class="text-xs-right mt-3">
                                <v-btn  flat @click="datos9=false">Cerrar<v-icon>close</v-icon></v-btn>
                             </v-flex>
                         </v-layout>
                               <v-card-text>
                                   <v-layout>
                                       <v-flex class="text-xs-center">
                                           <v-icon large class="icono" color="yellow">
                                                fas fa-info
                                            </v-icon>
                                       </v-flex>
                                   </v-layout>
                                   <h1 class="headline font-weight-bold mb-0 text-xs-center">La suspension del Artista / Agrupacion ha sido Cancelada.</h1>
                                </v-card-text>
                        
                         <v-card-actions>
                             <v-layout class=" text-xs-center">
                                 <v-flex>
                                     <v-btn round class=" red mb-3 white--text " @click="datos9=false" >
                                        <v-icon left class="ml-0 mr-1">fas fa-times-circle</v-icon>Cerrar
                                     </v-btn>
                                 </v-flex>
                             </v-layout>
                         </v-card-actions>
                     </v-card>
                  </v-dialog>







    </div>
</template>

<script>
import rating from '../components/raiting'

export default {
    components: {rating
       /*  RegistroA */
    },

  data(){
      return{
             datos2:false,datos3:false,visible:false,datos7:false,
             visible2:true,datos4:false, datos5:false,direccion:'',datos6:false,datos8:false,datos9:false,visible200:false,
                 
               grupos: [
                 {id:1,nombre:'los terricolas',tipo:'agrupacion',genero:'balada',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/terricolas.jpg'},
                {id:2,nombre:'ozuna',tipo:'artista',genero:'reguetton',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/ozuna.jpg'},
                {id:3,nombre:'daddy yankee',tipo:'artista',genero:'reguetton',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/daddy.jpg'},
                {id:4,nombre:'mana',tipo:'agrupacion',genero:'rockpop',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/mana.jpg'},
                {id:5,nombre:'los melodicos',tipo:'agrupacion',genero:'variado',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/melodicos.jpg'},
                {id:6,nombre:'bad bunny',tipo:'artista',genero:'reguetton',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/badbunny.jpg'},
                {id:7,nombre:'armando y miguel',tipo:'agrupacion',genero:'variado',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/armando.jpg'},
                {id:8,nombre:'los terricolas',tipo:'agrupacion',genero:'balada',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/terricolas.jpg'},
                {id:9,nombre:'ozuna',tipo:'artista',genero:'reguetton',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/ozuna.jpg'},
                {id:10,nombre:'daddy yankee',tipo:'artista',genero:'reguetton',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/daddy.jpg'},
                {id:11,nombre:'mana',tipo:'agrupacion',genero:'rockpop',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/mana.jpg'},
                {id:12,nombre:'los melodicos',tipo:'agrupacion',genero:'variado',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/melodicos.jpg'},
                {id:13,nombre:'bad bunny',tipo:'artista',genero:'reguetton',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/badbunny.jpg'},
                {id:14,nombre:'armando y miguel',tipo:'agrupacion',genero:'variado',tlf:'4147884444',email:'iguana@gmail.com',direccion:'calles los silos',foto:'/armando.jpg'}
            ],
            search:''
      }
  }
}
</script>
<style scoped>
i{
 font-size:24px


}
  </style>  
