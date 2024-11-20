<template>
    <div class="row justify-content-center pb-5">
        <div class="col-12 col-sm-10 col-lg-8">
            
            <div class="row mt-3 mb-3">
                <h2 class="text-center">Intereses</h2>
            </div>
            
            <div class="row">
                <div class="col">
                    <ul>
                        <li v-for="(item, index) in info" :key="index">
                            {{ item.titulo }}
                        </li>
                    </ul>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
</script>