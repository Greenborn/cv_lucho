<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-lg-8">
            
            <div class="row mt-3 mb-3">
                <div class="col">
                    <h2 class="text-center">Experiencia Laboral</h2>
                </div>
            </div>

            <div class="row border-bottom mb-3" v-for="(item, index) in info" :key="index">
                <div class="col pb-1">
                    
                    <div class="row">
                        <div class="col">
                            <h4>{{  item.puesto }} - {{  item.empresa_organizacion }}</h4>
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
                                <li v-for="(item_exp, index_exp) in item.experiencia_especifica" :key="index_exp" class="mt-1 mb-2">
                                    <div class="row border-bottom">
                                        <div class="col">
                                            <p><b>{{  item_exp.titulo }}</b></p>
                                            <p>{{  item_exp.descripcion }}</p>
                                            <p><b>Skills:</b> <span v-for="(item_skill, index_skill) in item_exp.habilidades" :key="index_skill"><small class="m-1">{{  item_skill }}</small>  </span></p>
                                        </div>
                                    </div>
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