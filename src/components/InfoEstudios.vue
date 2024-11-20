<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10  section pr-5 pl-5 pb-0">
            
            <div class="row mt-3 mb-3">
                <div class="col">
                    <h4 ><b>Estudios</b></h4>
                </div>
            </div>
            
            <div class="row border-bottom mb-3" v-for="(item, index) in info" :key="index">
                <div class="col pb-1">
                    
                    <div class="row">
                        <div class="col">
                            <h5 v-html="item.titulo"></h5>
                            <p v-html="item.institucion"></p>
                            <p><b>Año Inicio:</b> {{  item.inicio }} - <b>Año Fin:</b> {{  item.egresado }}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
</script>