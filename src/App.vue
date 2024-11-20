<template>
  <InfoPerfil  :info="INFO_CV.perfil"/>
  <InfoHabilidades  :info="INFO_CV.habilidades"/>
  <InfoHaciendo  :info="INFO_CV.haciendo_actualmente"/>
  <InfoExperiencia  :info="INFO_CV.experiencia_laboral"/>
  <InfoIdioma  :info="INFO_CV.idiomas"/>
  <InfoEstudios :info="INFO_CV.estudios"/>
  <InfoIntereses :info="INFO_CV.intereses"/>
</template>

<script setup>
import InfoEstudios from './components/InfoEstudios.vue';
import InfoExperiencia from './components/InfoExperiencia.vue';
import InfoHabilidades from './components/InfoHabilidades.vue';
import InfoHaciendo from './components/InfoHaciendo.vue';
import InfoIdioma from './components/InfoIdioma.vue';
import InfoIntereses from './components/InfoIntereses.vue';
import InfoPerfil from './components/InfoPerfil.vue';

import { INFO_CV } from './components/data.js'

</script>

<style scoped>
</style>
