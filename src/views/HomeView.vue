<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>HOLA MUNDO</h1>
    <button @click="gotoDayBook" class="btn btn-primary" >Primary</button>
    <button @click="gotoDayBook" class="btn btn-info">Secundary</button>
    <button @click="gotoDayBook" class="btn btn-success"> Success</button>
</template>

<script>
  export default{
    methods:{
      gotoDayBook(){
        this.$router.push({name:'no-entry'})
      }
    }
  }
</script>

