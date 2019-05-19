<template>
    <div class="">
<v-card
    class="mx-auto my-0"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span class="font-weight-bold">{{ currentTitle }}</span>
      <v-avatar
        color="teal lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Correo Electrónico:"
            v-model=value
            placeholder="yixon.0702@gmail.com"
         class="font-weight-bold black--text" ></v-text-field>
          <span class="body-2 font-weight-bold">
           Este Correo será usado para ingresar al Sistema.
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Contraseña"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirme su Contraseña"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
           Por Favor verifique su nueva Contraseña
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        
        <div class="pa-3 text-xs-center">
          <v-img
            class="mb-3"
            contain
            height="70"
            src="/lo1.png"
          ></v-img>
          <h3 class="headline font-weight-bold mb-2">Bienvenido...!!! </h3>
          <span class="caption black--text">Gracias por Registrarse</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn round
        :disabled="step === 1"
        flat
        class="grey lighten-2"
        @click="step--"
      >
        Regresar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn round
        :disabled="step === 3"
        color="teal"
        depressed
        @click="step++" dark
      >
        Siguiente
      </v-btn>
    </v-card-actions>
  </v-card>
    </div>
</template>
<script>
  export default {
    data: () => ({
      step: 1
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Confirma tu Email'
          case 2: return 'Create una Nueva Contraseña'
          default: return 'Datos creados Correctamente'
        }
      }
    }
  }
</script>