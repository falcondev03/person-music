
<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>
        <h1 class="headline font-weight-bold"> Usuarios Registrados en el Sistema</h1>
       
      </v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
    <v-text-field
        v-model="search"
        append-icon="fas fa-search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
     
     
     
     
     
     
     
     
     <!--dialogo para generar el llenado o edicion de los datos de la tabla  --> 
     <v-dialog v-model="dialog" max-width="550px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" fab dark class="mb-2" v-on="on">
            <v-icon>
              add
            </v-icon>

          </v-btn>
        </template>
            <v-card>
                    <v-card-title class="text--xs--center">
                       <v-layout row>
                           <v-flex xs12 mx12 sm12 lg12  class="text-xs-center mt-3 font-weight-bold">
                               <span class="headline">{{ formTitle }}</span>
                           </v-flex>
                       </v-layout>
                     </v-card-title>
                
                     <v-card-text>
                           <v-layout row>
                              <v-flex xs12 mx12 sm12 lg12 class="mt-0 ml-3">
                                    <v-text-field
                                      :v-bind="Nombre"
                                      label="Nombre"
                                      id="nombre"
                                      v-model="editedItem.Nombre"
                                      type="text"
                                      prepend-icon="fas fa-user-tie"
                                      required></v-text-field>
                                  </v-flex>
                                </v-layout>
                                <v-layout row>
                                  <v-flex xs12 mx12 sm12 lg12 class="mt-0 ml-3">
                                    <v-text-field
                                      :v-bind="Apellido"
                                      label="Apellido"
                                      id="apellido"
                                      v-model="editedItem.Apellido"
                                      prepend-icon="fas fa-user-circle"
                                      type="text"
                                      required></v-text-field>
                                  </v-flex>
                                </v-layout>
                                <v-layout row class=" text-xs-center font-weight-bold text-wrap display-1 mx-0 py-0">
                                  <v-flex xs12 mx12 sm12 lg12 class="mt-0 ml-3">
                                    <v-text-field
                                      :v-bind="Correo"
                                      label="Correo Electronico"
                                      id="email"
                                      v-model="editedItem.Correo"
                                      type="email"
                                          prepend-icon="fas fa-at"
                                      required></v-text-field>
                                  </v-flex>
                                </v-layout>
                                <v-layout row>
                                  <v-flex xs12 mx12 sm12 lg12 class="mt-0 ml-3">
                                    <v-text-field
                                      :v-bind="Contraseña"
                                      label="Contraseña"
                                      id="password"
                                      v-model="editedItem.Contraseña"
                                type="password"
                                      prepend-icon="fas fa-key"
                                      required></v-text-field>
                                  </v-flex>
                                </v-layout>
                                <v-layout row>
                                <v-flex xs12 mx12 sm12 lg12 class="mt-0 ml-3">
                                    <v-select
                                        v-model="editedItem.usuario"
                                        :items="tipo"
                                        :rules="[v => !!v || 'Seleccione si Es Admin o Visitante']"
                                        label="* Tipo de Usuario ( Admin - Visitante )"
                                        prepend-icon="fas fa-users"
                                        required>
                                    </v-select>
                                </v-flex>
                                </v-layout>
                        </v-card-text>
                       <v-card-actions>
                        <v-layout row>
                            <v-flex xs12 mx12 sm12 lg12 class="mx-3 mb-4 text-xs-center">
                              <v-btn  class="warning" type="submit" @click="close()">
                                  <v-icon small left>
                                fas fa-times-circle
                                </v-icon>Cancelar
                                <span slot="loader" class="custom-loader">
                                  <v-icon  color="green">light</v-icon>
                                </span>
                              </v-btn>
                            </v-flex>
                              <v-flex xs12 md12 sm12 class=" text-xs-center mx-3 mb-4">
                            <v-btn class="success"  @click="save">
                                <v-icon small left>
                                  fas fa-save
                                
                                </v-icon>
                                Guardar</v-btn>
                            </v-flex>
                          </v-layout>
                       </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <!--dialogo para generar el llenado o edicion de los datos de la tabla  --> 
  
   <!-- tabla de datos -->  
    <v-data-table
      :headers="headers"
      :items="usuarios"
      class="elevation-10 mx-5 px-5 my-5"
       :search="search"

    >
      <template v-slot:items="props">
        <td class="text-xs-center font-italic subheading">{{ props.item.Nombre }}</td
        >
        <td class="text-xs-center font-italic subheading">{{ props.item.Apellido }}</td>
        <td class="text-xs-center font-italic subheading">{{ props.item.Correo }}</td>
        <td class="text-xs-center font-italic subheading">{{ props.item.Contraseña }}</td>
        <td class="text-xs-center font-italic subheading">{{ props.item.usuario }}</td>
        <td class="justify-center layout px-2 mx-3">
          <v-icon
            medium
            class="mr-2 font-weight-bold"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            large
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
       
      </template>
       <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no produjo resultados.
        </v-alert>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">llenar tabla</v-btn>
      </template>
    </v-data-table>
     <!-- tabla de datos -->  
  
  </div>
</template>

<script>
  export default {
           
    data: () => ({
      dialog: false,
      headers: [
        { text: 'Nombre', value: 'Nombre', sortable: true,  align: 'center' },
        { text: 'Apellidos', value: 'Apellido', sortable: true,  align: 'center' },
        { text: 'Correo ', value: 'Correo', sortable: true,  align: 'center' },
        { text: 'Contraseña', value: 'Contraseña', sortable: true,  align: 'center' },
        { text: 'Usuario', value: 'usuario', sortable: true,  align: 'center' },
        { text: 'Acciones', value: 'accion', sortable: false,  align: 'center' }
      ],
       tipo:['Admin','Visitante','Secretaria'],
      usuarios: [],
      pagination:{},
      search:'',
      editedIndex: -1,
      editedItem: {
        Nombre: '',
        Apellido:'',
        Correo: '',
        Contraseña: '',
        usuario:'',
        Acciones: ''
      },
      defaultItem: {
         Nombre: '',
        Apellido:'',
        Correo: '',
        Contraseña: '',
        usuario:'',
       Acciones: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Registro de Usuarios' : 'Edición de Usuarios'
      }
    },
    

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.usuarios = [
          { Nombre: 'Yixon', Apellido: 'Anuel', Correo: 'Yixon.0702@gmail.com', Contraseña: '1234', usuario:'Admin'},
          { Nombre: 'Carinel', Apellido: 'Rodriguez', Correo: 'carinel@gmail.com', Contraseña: '4321', usuario:'Admin'},
          { Nombre: 'Rosa', Apellido: 'Fuentes', Correo: 'rosa@gmail.com', Contraseña: '5498', usuario:'Secretaria'},
          { Nombre: 'Yaixibel', Apellido: 'Pereda', Correo: 'yaixibel@gmail.com', Contraseña: '8945', usuario:'Visitante'},
          { Nombre: 'Jesús', Apellido: 'Russo', Correo: 'jesusrusso@gmail.com', Contraseña: '6322', usuario:'Visitante'},
                        ]
      },

      editItem (item) {
        this.editedIndex = this.usuarios.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.usuarios.indexOf(item)
        confirm('Seguro que deseas eliminar este usuario?') && this.usuarios.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.usuarios[this.editedIndex], this.editedItem)
        } else {
          this.usuarios.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>