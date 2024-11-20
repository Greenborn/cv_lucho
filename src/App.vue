<template>
  <InfoPerfil  :info="INFO_CV.perfil"/>
  <InfoExperiencia  :info="INFO_CV.experiencia_laboral"/>
  <InfoHabilidades  :info="INFO_CV.habilidades"/>
  <InfoIdioma  :info="INFO_CV.idiomas"/>
  <InfoEstudios :info="INFO_CV.estudios"/>
  <InfoIntereses :info="INFO_CV.intereses"/>
</template>

<script setup>
import InfoEstudios from './components/InfoEstudios.vue';
import InfoExperiencia from './components/InfoExperiencia.vue';
import InfoHabilidades from './components/InfoHabilidades.vue';
import InfoIdioma from './components/InfoIdioma.vue';
import InfoIntereses from './components/InfoIntereses.vue';
import InfoPerfil from './components/InfoPerfil.vue';

import { INFO_CV } from './components/data.js'

</script>

<style scoped>
</style>
