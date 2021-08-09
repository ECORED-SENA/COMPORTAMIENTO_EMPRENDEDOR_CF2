<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Análisis de alternativas y riesgos
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-4.col-md-4.justify-content-md-center.align-self-center
        figure
          img.img-500.mb-2(src="@/assets/tema2/img-1.svg")
      .col-lg-8.col-md-8.justify-content-md-center.align-self-center
        p Uno de los factores más importantes en el proceso de toma de decisiones es la generación de alternativas; en el desarrollo de este tema podrá identificar diferentes herramientas que permiten el análisis de los diferentes contextos y la selección de las mejores alternativas a partir de los criterios establecidos.

        p La generación de alternativas estimula la búsqueda de información y un análisis profundo de la situación. En ocasiones, la falta de información lleva a tomar decisiones equivocadas pues no se tiene una visión completa de la situación, siendo complejo desarrollar alternativas desde una visión sesgada. 

        p Si bien en la mayoría de las ocasiones no es fácil identificar todas las opciones posibles, cuantas más alternativas se generen es más probable obtener una que resulte significativamente satisfactoria.

        p Sin embargo, es importante evaluar la importancia de la alternativa para el cumplimiento del objetivo, pues el exceso de alternativas también puede resultar abrumador y generar un bloqueo en la toma de decisiones.
    
    p.mb-5 A continuación se verán algunas de las herramientas más utilizadas para generar alternativas.

    #base.row.justify-content-around.align-items-center
      .row.col-10.fond4.justify-content-around.align-items-center.mb-5.d-flex.clearfix
        .row
          .col-md-6.col-lg-3.mb-4
              a(href="#1")
                figure
                  img.p-2(src="@/assets/tema2/img-2.svg") 
                p.text-bold.text-center Lluvia de ideas
          .col-md-6.col-lg-3.mb-4
              a(href="#2")
                figure
                  img.p-2(src="@/assets/tema2/img-3.svg") 
                p.text-bold.text-center Diagrama de Ishikawa
          .col-md-6.col-lg-3.mb-4
              a(href="#3")
                figure
                  img.p-2(src="@/assets/tema2/img-4.svg") 
                p.text-bold.text-center Análisis FODA
          .col-md-6.col-lg-3.mb-4
              a(href="#4")
                figure
                  img.p-2(src="@/assets/tema2/img-5.svg") 
                p.text-bold.text-center Reflexión

    #1.row.fond-1.p-5.mb-5
      .anchorHeader
        .anchorHeader__body.justify-content-end
          .anchorHeader__btn
            a(href="#base")
              .fas.fa-chevron-up
      .row
        .col-md-6.mb-4.mb-md-0
         
          p #[strong Lluvia de ideas:] esta herramienta generalmente es utilizada cuando se busca llegar a consensos o tomar decisiones en grupo. Pues permite aprovechar la participación de los integrantes y generar la mayor cantidad de opciones; además motiva a un razonamiento mayor y más imaginativo (Ionos, 2018).
          p La lluvia de ideas potencia los procesos creativos, y la generación de alternativas originales que ayudan en la resolución de una situación o problema.
          p Cómo surge la lluvia de ideas. En el año 1919, Alex Osborn estaba en búsqueda de nuevas ideas; se reunió con un grupo de personas en un ambiente desestructurado e informal, sin jerarquías, así que todos podían opinar y dar a conocer sus ideas sin límites; de esta manera descubrió que se pueden generar mejores soluciones a partir del intercambio de ideas entre las personas; aprovechar la capacidad creativa de todo el grupo es una muy buena estrategia a la hora de generar nuevas alternativas. 
        .col-md-6.mb-5
          figure
            img(src='@/assets/tema2/img-6.svg')
          
      p La lluvia de ideas se concibe de manera grupal, coordinado por un moderador, responsable de crear clima de trabajo positivo para desarrollar la actividad y estimular la participación de los asistentes.

    p Para generar un proceso de lluvia de ideas es necesario tener en cuenta los siguientes aspectos:
    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span a
          | La persona que conduce la sesión (moderador) debe explicar el problema, situación o la oportunidad que se presenta y dar a conocer las principales reglas:
    .row
        .col-md-5.col-lg-5.mb-5
          figure
            img.img-400(src='@/assets/tema2/img-7.svg')              
        .col-md-7.mb-4.mb-md-0.col-lg-7
          .ul.lista-ul--color
            li 
              i.fas.fa-check
              p Ofrecer tantas ideas como sea posible, ser creativo.

            li 
              i.fas.fa-check
              p No criticar las ideas de los demás o discutir sobre la utilidad de estas.
            li 
              i.fas.fa-check
              p Aplazar el juicio, toda idea es válida y no deben ser rechazadas.
            li 
              i.fas.fa-check
              p Combinar, adaptar, y transformar las ideas para generar una nueva.
    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span b
          |   Después de que todas las ideas han sido expuestas se deben agrupar y ubicar en orden jerárquico.
        li 
          .lista-ol--cuadro__vineta
            span c
          |  Priorizar las alternativas más promisorias e interesantes, se puede solicitar a los participantes dar una puntuación, las que obtienen más votos son discutidas en mayor profundidad, las demás son descartadas.
        li 
          .lista-ol--cuadro__vineta
            span d
          |   Analizar las causas y los efectos de las alternativas priorizadas y cómo estas influyen en la solución del problema u objetivo, para finalmente definir la alternativa a ejecutar.
    .row.justify-content-around.align-items-center
      .col-6.mb-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/ejemplo_lluvia_ideas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Ver ejemplo aplicado sobre lluvia de ideas

    hr          
    #2.row.fond-1.p-5.mb-5
      .anchorHeader
        .anchorHeader__body.justify-content-end
          .anchorHeader__btn
            a(href="#base")
              .fas.fa-chevron-up
      .row        
        p #[strong Diagrama de Ishikawa:] también conocido como el diagrama de espina de pescado o diagrama de causa y efecto. Permite identificar el problema u oportunidad y visualizar las causas que lo/la generan.
        p Es empleado para facilitar el análisis de los problemas y encontrar soluciones factibles a partir de las causas identificadas. Se centra principalmente en el por qué.
         
    .row.fond1.p-5.align-self-center.mb-5
        .col-md-5.mb-5.align-self-center
          .ul.lista-ul--color
            li 
              i.fas.fa-check
              p En la cabeza del diagrama se escribe el síntoma, problema o efecto que pretendemos analizar.
            li 
              i.fas.fa-check
              p En las espinas o líneas de los lados se escribirán las causas que se considera producen tal efecto.
            li 
              i.fas.fa-check
              p A cada causa se le incluyen subcausas que afectan la causa y el efecto.

             
        .col-md-7.mb-4.mb-md-0.align-self-center
          figure
            img(src='@/assets/tema2/img-8.svg') 
          
    p.text-bold Algunas recomendaciones para la utilización de esta herramienta son:
    .row.p-5.align-self-center
        .col-md-7.mb-4.mb-md-0.align-self-center
          figure
            img.img-400(src='@/assets/tema2/img-9.svg') 
        .col-md-5.mb-5.align-self-center
          .ul.lista-ul--color
            li 
              i.fas.fa-check
              p Mantener la calma si no se conoce alguna causa, el mismo análisis evidenciará causas que no habían sido previstas. 
            li 
              i.fas.fa-check
              p Si existe alguna dificultad se pueden categorizar las causas.
            li 
              i.fas.fa-check
              p Aplazar el juicio, simplemente anotar sin calificar su factibilidad.

          a.anexo.mb-4(:href="obtenerLink('/downloads/ejemplo_ishikawa.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Anexo.] Ver ejemplo aplicado de diagrama Ishikawa.

    hr.mb-5  
    #3.row.fond-1.px-5
      .anchorHeader
        .anchorHeader__body.justify-content-end
          .anchorHeader__btn
            a(href="#base")
              .fas.fa-chevron-up
      .row        


        p #[strong Análisis FODA:] esta herramienta permite realizar un análisis interno (debilidades y fortalezas) y externo (oportunidades y amenazas) teniendo en cuenta todos los factores involucrados en una decisión (Visión industrial, 2017).
        p.mb-5 Al hacer una revisión de la situación actual, promueve la toma de decisiones a través de diferentes alternativas, para definir el escenario futuro que se quiere obtener.
        .row.justify-content-around.align-items-center.mb-5
          .col-lg-10.col-md-10.justify-content-md-center.align-self-center
            figure
              img.mb-2(src="@/assets/tema2/img-10-.svg")

    .row.justify-content-around.align-items-center
      .col-6.mb-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/ejemplo_FODA.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Ver ejemplo aplicado de Análisis FODA.

    hr
    #4.row.fond-1.px-5.mb-5
      .anchorHeader
        .anchorHeader__body.justify-content-end
          .anchorHeader__btn
            a(href="#base")
              .fas.fa-chevron-up 
      .row.p-5.align-self-center
          .col-md-7.mb-4.mb-md-0
            p #[strong Reflexión:] debe tener presente siempre, que todo lo que posee, todo con lo que cuenta, los conocimientos, y en general nuestra vida, son el resultado obtenido de cada acción que hemos ejecutado, con base en las decisiones que hemos tomado.

            p Nuestras acciones de hoy son el primer paso que nos llevará a los logros del mañana. Si revisa sus acciones más recientes, tendrá una idea de lo que le depara el futuro. Recuerde que las decisiones forman nuestro presente, lo que somos y lo que seremos.

          .col-md-5.align-self-center    
            figure
              img(src='@/assets/tema2/img-11.svg') 

    hr.mb-5  
    .row.mb-5.fondo-i     
      .col-lg-5.col-sm-8.justify-content-around.align-items-center.img-c.align-self-center 
        p Para finalizar le invito a que reflexione en relación con las siguientes preguntas:
        .ul.lista-ul--color
          li 
            i.fas.fa-check
            p.text-bold ¿Cree que es importante conocer las diferentes herramientas de generación y análisis de alternativas para la toma de decisiones en su vida cotidiana?
          li 
            i.fas.fa-check
            p.text-bold ¿Cómo aplicaría los temas estudiados a su vida cotidiana?
          li 
            i.fas.fa-check
            p.mb-5.text-bold ¿Considera que las herramientas que vimos le permitirán generar mayores alternativas al momento de tomar una decisión?
        .crd_02
            .crd_02__icon
              figure.px-3
                  img.img-450.mb-2(src="@/assets/tema1/img-11.svg") 

            .crd_02__txt.p-2
              p.text-white Consigne sus respuestas en la bitácora, esto le permitirá realizar un mejor análisis de los temas estudiados. 
       
      .col-lg-6.col-sm-8.justify-content-around.align-items-center.img-c.mb-5
        figure.px-3.py-3
            img.img-501.mb-2(src="@/assets/tema2/img-12.svg")
      .row.justify-content-around.align-items-center
        .col-lg-10
          .tarjeta.color-secundario.p-3.mb-5.fond-des
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/tema2/img-14.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 CARTILLA COMPORTAMIENTO EMPRENDEDOR CAMINO AL LOGRO
                    p.text-small Para profundizar en este tema lo invito a revisar la cartilla institucional SENA, llamada Comportamiento emprendedor, camino al logro en la Unidad 4. Toma de decisiones, página 53 a la 58.
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_5_Cartilla_comportamiento_emprendedor_camilo_al_logro.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
