<template>
    <div class="row justify-content-center ">
        <div class="col-12 col-sm-10 section pl-5 pr-5  pb-0">
            
            <div class="row mt-3 mb-3">
                <div class="col">
                    <h4><b>Experiencia Laboral</b></h4>
                </div>
            </div>

            <div class="row border-bottom mb-3" v-for="(item, index) in info" :key="index">
                <div class="col pb-1">
                    
                    <div class="row text-center">
                        <div class="col">
                            <h5><a :href="item.url" target="_blank">{{  item.puesto }} - {{  item.empresa_organizacion }}</a></h5>
                            <p><b>Año Inicio:</b> {{  item.inicio }} - <b>Año Fin:</b> {{  item.fin }}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <p>{{  item.descripcion }}</p>
                        </div>
                    </div>
                          
                    <div class="row">
                        <div class="col">
                            <ul>
                                <li v-for="(item_exp, index_exp) in item.experiencia_especifica" :key="index_exp">
                                    <b>{{  item_exp.titulo }}</b>
                                </li>
                            </ul>
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