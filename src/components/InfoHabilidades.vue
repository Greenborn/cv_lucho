<template>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 section pr-5 pl-5 pt-0 pb-0">

            <div class="row mt-3 mb-3">
                <div class="col">
                    <h4 ><b>Habilidades Técnicas</b></h4>
                </div>
            </div>

            <div class="row">
                <div class="col-12" v-for="(item, index) in info" :key="index">
                    <h6><b>{{ index }}:</b> &nbsp;
                        <span class="badge badge-pill ml-1  badge-info" 
                            v-for="(item_skill, index_skill) in item" :key="index_skill">{{ item_skill }}</span>
                    </h6>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
</script>