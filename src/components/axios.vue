<template>
    <div>
        
    </div>
</template>
<script>
export default {
     data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.musicos = response))
  }
}
</script>