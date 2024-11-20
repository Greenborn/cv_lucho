<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-lg-8">

            <div class="row mt-3 mb-3">
                <div class="col">
                    <h2 class="text-center">Skill's</h2>
                </div>
            </div>

            <div class="row" >
                <div class="col-12 col-md-6" v-for="(item, index) in info" :key="index">
                    <p><b>{{ index }}: &nbsp;</b>
                    
                    <span v-for="(item_skill, index_skill) in item" :key="index_skill">
                        <small>{{ item_skill }}&nbsp;-&nbsp;</small></span></p>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
</script>