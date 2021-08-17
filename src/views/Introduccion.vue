<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 A continuación, presentaremos el video que hará una breve introducción del presente componente formativo
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/J5JP7YxPqAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
    br        
    .row.justify-content-around.align-items-center.mb-5
      .col-lg.justify-content-md-center.align-self-center  
        p Con el desarrollo de este tema podrá conocer la importancia de la toma de decisiones, como la elección entre dos o más alternativas, estas pueden traer consecuencias positivas o negativas en su vida cotidiana, así como, potencializar o afectar el éxito de su emprendimiento.
        p También conocerá el proceso de toma de decisiones y cuáles son los pasos o fases que le permitirán optar por la alternativa más óptima, fortaleciendo así sus habilidades y capacidades para evaluar y validar la información en el momento de tomar una decisión.
        .cajon.color-acento-contenido.p-4.mb-4
          p Para un mejor aprendizaje, se le recomienda responder a las preguntas y ejercicios de reflexión propuestos en el desarrollo de los contenidos, para ello puede disponer de una bitácora física (cuaderno) o digital. Este será su diario de viaje.
        p La bitácora no constituye una actividad evaluativa.
        p.mb-5 A continuación, encontraremos diferentes interrogantes a tener en cuenta como:

      .col-12.col-lg-auto.justify-content-md-center.mb-4  
        figure
          img(src='@/assets/tema1/img-intro-1.svg', alt='Texto que describa la imagen')
    .t-intro.mb-5
        SlyderA
          .row
            .col-md-6.mb-4.mb-md-0.p-5
              .row.mt-3.mx-3
                p.text-bold ¿Ha pensado, alguna vez, en la cantidad de decisiones que toma cada día?
                p.text-bold ¿Qué ropa se pondrá?
                p.text-bold ¿Qué hará la tarde del sábado?
                p.text-bold ¿En qué gastará el dinero?
                p Como puede ver, la toma de decisiones es un elemento central en toda actividad humana.
            .col-md-6
              figure
                img(src='@/assets/tema1/img-intro-2-.svg')
    
          .row
            .col-md-6.mb-4.mb-md-0.p-5
              .row.mt-3.mx-3
                p Con frecuencia el error común de los emprendedores es que no son conscientes de que todas y cada una de las acciones que realizan, tienen un precio y por supuesto, generan unos resultados o consecuencias.
  
                p El éxito de un emprendedor está determinado en gran medida por la calidad de las decisiones que ha tomado y la posibilidad que estas le han ofrecido para explorar nuevas oportunidades.

          
            .col-md-6
              figure
              img(src='@/assets/tema1/img-intro-3-.svg')
         
          .row
            .col-md-6.mb-4.mb-md-0.p-5
              .row.mt-3.mx-3
                p Entonces, #[strong ¿qué se puede hacer para tomar una decisión adecuada?,] para resolver esta pregunta conocerá el proceso de toma de decisiones; este proceso es una guía que le permitirá analizar el problema o la situación, generar y evaluar diferentes opciones para finalmente seleccionar la mejor opción, entre varias alternativas posibles.
          
            .col-md-6
              figure
              img(src='@/assets/tema1/img-intro-4-.svg')


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
