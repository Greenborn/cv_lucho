<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 p-5 pt-0  section">
            
            <div class="row mt-3 mb-3">
                <div class="col"><h4 ><b>Proyectos en Curso</b></h4></div>
            </div>
            
            <div class="row" v-for="(item, index) in info" :key="index">
                <div class="col">

                    <div class="row border-bottom text-center">
                        <div class="col mb-1">
                            <b><a :href="item.url" target="_blank">{{ item.titulo }}</a></b>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <p v-html="item.descripcion_organizacion"></p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <p>
                                <b>Tareas y Responsabilidades:&nbsp;</b>
                                <span class="badge badge-pill ml-1  badge-info2" 
                                    v-for="(item_tec, index_tec) in item.tareas_realizadas" :key="index_tec">
                                    {{  item_tec }}
                                </span>
                                <br>

                                <b>Tecnologias Usadas:&nbsp;</b>
                                <span class="badge badge-pill ml-1  badge-info2" 
                                    v-for="(item_tec, index_tec) in item.tecnologias_usadas" :key="index_tec">{{ item_tec }}</span>
                            </p>
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