<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 section pl-5 pr-5 pb-0">
            
            <div class="row">
                <div class="col">
                    <h4><b>Idiomas</b></h4>
                </div>
            </div>

            <ul>
                <li v-for="(item, index) in info" :key="index">
                    <b>{{item.idioma}}: </b>{{ item.nivel }}
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
</script>