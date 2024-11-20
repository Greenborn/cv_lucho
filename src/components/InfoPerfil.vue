<template>

    <div class="row justify-content-center ">
        <div class="col-12 col-sm-10  section">

            <div class="row cont-prof-1">
                <div class="col-12  pl-5 pr-5 pt-5">
                    <h2 >{{ info.nombre_completo }}</h2>
                    <p ><b>{{ info.puesto }}</b></p>
                </div>

                <div class="col pl-5 pr-5 pb-5">
                    <ul>
                        <li><b>Fecha de Nacimiento: </b>{{ info.fecha_nacimiento }}</li>
                        <li><b>Nacionalidad: </b>{{ info.nacionalidad }}</li>
                        <li><b>Ciudad de Residencia: </b>{{ info.ciudad_residencia }}, {{ info.provincia_residencia }}
                        </li>
                        <li><b>Email: </b><a :href="'mailto:' + info.email" target="_blank"><small>{{ info.email }}</small></a></li>
                    </ul>
                </div>

                <div class="col pl-5 pr-5 pb-5">
                    <ul>
                        <li><b>Github:</b> <a :href="info.link_github" target="_blank"><small>{{ info.link_github
                                }}</small></a></li>
                        <li><b>LinkedIn: </b><a :href="info.link_linkedin" target="_blank"><small>{{ info.link_linkedin
                                }}</small></a></li>
                        
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col pl-5 pr-5 pt-5 mt-2 pb-0">
                    <h4><b>Perfil Profesional</b></h4>
                    <p v-html="info.perfil_profesional"></p>
                </div>
            </div>

            
        </div>
    </div>

</template>

<script setup>
const props = defineProps(['info'])
</script>

<style scoped>
.cont-prof-1{
    background-color: #cbe6ff;
}
</style>
