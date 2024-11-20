<template>
  <div class="row justify-content-end d-print-none">
    <div class="col-auto">
      <button type="button" class="btn btn-dark" @click="descargar()">Descargar</button>
    </div>
  </div>

  <div class="w-100" id="cvData">
    <InfoPerfil  :info="INFO_CV.perfil"/>
    <InfoHabilidades  :info="INFO_CV.habilidades"/>
    <InfoHaciendo  :info="INFO_CV.haciendo_actualmente"/>
    <InfoExperiencia  :info="INFO_CV.experiencia_laboral"/>
    <InfoIdioma  :info="INFO_CV.idiomas"/>
    <InfoEstudios :info="INFO_CV.estudios"/>
    <InfoIntereses :info="INFO_CV.intereses"/>
  </div>
  
</template>

<script setup>
import { jsPDF } from "jspdf";

import InfoEstudios from './components/InfoEstudios.vue';
import InfoExperiencia from './components/InfoExperiencia.vue';
import InfoHabilidades from './components/InfoHabilidades.vue';
import InfoHaciendo from './components/InfoHaciendo.vue';
import InfoIdioma from './components/InfoIdioma.vue';
import InfoIntereses from './components/InfoIntereses.vue';
import InfoPerfil from './components/InfoPerfil.vue';

import { INFO_CV } from './components/data.js'

function descargar(){
  const doc = new jsPDF();
  let elementHTML = document.querySelector("#cvData")
  doc.html(elementHTML, {
      callback: function(doc) {
          doc.save(INFO_CV.perfil.nombre_completo+".pdf");
      },
      html2canvas: {
        backgroundColor: "#90c976"
      },
      x: 0, y: 0,
      width: 210, 
      autoPaging: 'text',
      windowWidth: 1366
  });
}
</script>

<style>
#cvData {
  background-color: #fff;
  padding-bottom: 10rem;
  padding-top: 5rem;
}

.section{
  background: #fff;
}


html, body {
  background: #fff;
}

.badge-info2{
  color: #fff;
  background-color: #768bc9;
}
</style>
