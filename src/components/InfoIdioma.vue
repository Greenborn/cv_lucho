<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-lg-8">
            
            <div class="row mt-3 mb-3">
                <div class="col">
                    <h2 class="text-center">Idiomas</h2>
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