<template>
    <div class="entry-container mb-3 pointer p-2" 
    @click="$router.push({name:'Entry', params:{id:10} })">
        <!-- titulo de entrada -->
        <div class="entry-title d-flex">
                <span class="text-success fs-5 fw-bold">15</span>
                <span class="mx-1 fs-5">Febrero</span>
                <span class="mx-2 fw-light">2024, Jueves</span>
        </div>
        <div class="entry-description">
            hola mi nombre es francisco quiero decir que soy el mejor el mundo 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }
        .entry-description{
            font-size: 20px;
        }
    }

</style>