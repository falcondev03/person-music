<template>
<div>
     <RegistroA/>      
 <!-- dialogo del boton guardar --> 
    
</div>
</template>

<script>
import RegistroA from '@/components/RegistroA'
export default {
  components:{RegistroA},
     data() {
       return {
         passwordRules: [
                v => !!v || 'Contraseña es Obligatoria',
                v => v.length <= 15 || 'Debe poseer menos de 15 caracteres'
              ],
        nombre:'',seudonimo:'',artista:'',genero:'',tlf:'',email:'',direccion:'',imageurl:'',imageurl1:'',imageurl2:'',
        datos:false,
        datos1:false,
        tipo:['Artista', 'Agrupación'],
        tipo1:['Merengue', 'Salsa','Balada','Rock','Reguetton','Pop','Reggae'],
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
             emailRules: [
            v => !!v || 'El Correo es Obligatorio',
            v => /.+@.+/.test(v) || 'El Correo debe estar correcto'
          ]
       }
     }, 
        
      
    }
 
</script>
