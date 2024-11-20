<template>
    <div class="row justify-content-center pb-5">
        <div class="col-12 col-sm-10 col-lg-8">
            
            <div class="row mt-3 mb-3">
                <h2 class="text-center">Haciendo Actualmente</h2>
            </div>
            
            <div class="row" v-for="(item, index) in info" :key="index">
                <div class="col">

                    <div class="row border-bottom">
                        <div class="col mb-1">
                            <b><a :href="item.url" target="_blank">{{ item.titulo }}</a></b>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <p>
                                <b>Tareas y Responsabilidades:&nbsp;</b>
                                <span v-for="(item_tec, index_tec) in item.tareas_realizadas" :key="index_tec">
                                    {{  item_tec }}&nbsp;-&nbsp;
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <p>
                                <b>Tecnologias Usadas:&nbsp;</b>
                                <span v-for="(item_tec, index_tec) in item.tecnologias_usadas" :key="index_tec">
                                    {{  item_tec }}&nbsp;-&nbsp;
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <p>{{ item.descripcion_organizacion }}</p>
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