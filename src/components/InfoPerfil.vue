<template>

    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-lg-8 p-0">

            <div class="row">
                <div class="col">
                    <h2 class="text-center mt-5">{{ info.puesto }}</h2>
                    <h2 class="text-center mb-5">{{ info.descripcion_puesto }}</h2>
                </div>
            </div>

            <div class="row">

                <div class="col">
                    <h4 class="text-center">Contacto</h4>

                    <ul>
                        <li><b>Perfil Github:</b> <a :href="info.link_github" target="_blank">{{ info.link_github
                                }}</a></li>
                        <li><b>Perfil LinkedIn: </b><a :href="info.link_linkedin" target="_blank">{{ info.link_linkedin
                                }}</a></li>
                        <li><b>Email: </b><a :href="'mailto:' + info.email" target="_blank">{{ info.email }}</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h4 class="text-center">Información Personal</h4>

                    <ul>
                        <li><b>Nombre y Apellido: </b>{{ info.nombre_completo }}</li>
                        <li><b>Fecha de Nacimiento: </b>{{ info.fecha_nacimiento }}</li>
                        <li><b>Nacionalidad: </b>{{ info.nacionalidad }}</li>
                        <li><b>Ciudad de Residencia: </b>{{ info.ciudad_residencia }}, {{ info.provincia_residencia }}
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