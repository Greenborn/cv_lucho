<template>
    <div class="row justify-content-center ">
        <div class="col-12 col-sm-10  section pr-5 pl-5 pb-5">
            
            <div class="row mt-3 mb-3">
                <div class="col"><h4 ><b>Intereses</b></h4></div>
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