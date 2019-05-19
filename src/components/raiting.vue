<template>
  <div class="text-md-center">
  <!--   <v-rating color="yellow" v-model="rating"></v-rating>
   <h1 class="body-2">Puntaje:</h1><p>{{rating}}</p>  -->

      <span class="grey--text text--darken-2 caption mr-2">
         <v-rating
        v-model="rating"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="24"
      ></v-rating> Puntaje: ({{ rating }})
      </span>
    
  </div>

      
 
  
</template>
   
<script>
  export default {
    data: () => ({
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half',
      halfIncrements: true,
      hover: true,
      length: 5,
      rating: '',
      readonly: false,
     
         

    
    })
  }
</script>