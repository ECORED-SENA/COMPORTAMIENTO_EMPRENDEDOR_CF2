export default {
  global: {
    componenteFormativo: 'Toma de decisiones',
    descripcionCurso:
      'Emprender supone tomar decisiones permanentemente; las decisiones siempre tendrán un impacto a nivel personal u organizacional, y las consecuencias derivadas pueden ser positivas o negativas. En esta unidad conocerá los pasos para tomar una decisión e identificará las herramientas más utilizadas para la generación de ideas y soluciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso de toma de decisiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de alternativas y riesgos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (27 de enero de 2006). Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Diario Oficial No. 46.164.  ',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_1014_2006.html',
    },
    {
      referencia:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., Caycedo, M. (2020). Cartilla de comportamiento emprendedor ¡camino al logro! Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Fernández, A. (2010). Otra vez esa sensación, Capítulo 1: Los sentimientos. ',
      link:
        'http://catarina.udlap.mx/u_dl_a/tales/documentos/lda/fernandez_f_a/capitulo1.pdf',
    },
    {
      referencia: 'Ionos. (2018). <em>Brainstorming</em> o lluvia de ideas. ',
      link:
        'https://www.ionos.es/startupguide/productividad/brainstorming-o-lluvia-de-ideas/',
    },
    {
      referencia: 'Martínez, Y. (2018). Habilidad para la toma de decisiones. ',
      link:
        'https://www.eoi.es/blogs/mintecon/2014/05/18/habilidad-para-la-toma-de-decisiones/',
    },
    {
      referencia:
        'Real Academia Española. (2001). Causa. En el diccionario de la lengua española. ',
      link: 'https://dle.rae.es/causa',
    },
    {
      referencia:
        'Visión industrial. (2017). Cómo realizar un análisis FODA, y su importancia en la toma de decisiones. ',
      link:
        'https://www.visionindustrial.com.mx/industria/desarrollo-organizacional-3027/como-realizar-un-analisis-foda-y-su-importancia-en-la-toma-de-decisiones',
    },
  ],
  glosario: [
    {
      termino: 'Alternativas ',
      significado:
        'Posibilidad de optar o elegir entre dos o más opciones, que pueden materializarse para dar respuesta a una situación o problema determinados.',
    },
    {
      termino: 'Causas',
      significado:
        'Según la Real Academia Española RAE, causa es aquello que se considera como fundamento u origen de algo.',
    },
    {
      termino: 'Consecuencias',
      significado:
        'Es un hecho, acontecimiento o efecto que resulta a partir de un suceso, evento o elección.',
    },
    {
      termino: 'Decisión',
      significado:
        'Una decisión es una resolución o determinación que se toma con el propósito de resolver una situación específica.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'Se define como una manera de pensar y actuar orientada hacia la creación de riqueza. Es una forma de razonar y actuar centrada en las oportunidades, planteada con visión global y llevada a cabo mediante un liderazgo equilibrado y la gestión de un riesgo calculado, su resultado es la creación de valor que beneficia a la empresa, la economía y la sociedad. Fomento a la cultura del emprendimiento (Ley 1014 de 2006).',
    },
    {
      termino: 'Herramientas para generar alternativas',
      significado:
        'Instrumentos diseñados para promover la generación de ideas y soluciones, los cuales se implementan en el proceso de toma de decisiones.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Según la norma ISO 31000 - 2018, el riesgo es el efecto de la incertidumbre sobre los objetivos.',
    },
  ],
  complementario: [
    {
      texto:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). Cartilla comportamiento emprendedor ¡camino al logro!',
      tipo: 'Libro',
      descarga:
        '/downloads/Anexo_5_Cartilla_comportamiento_emprendedor_camilo_al_logro.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico.',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Paula Gómez Franco ',
        cargo: 'Coordinación Nacional de Emprendimiento.',
        centro: 'Dirección de Empleo, Trabajo y Emprendimiento.',
      },
      {
        nombre: 'Genny Andrea García Pereira',
        cargo: 'Coordinación Nacional de Emprendimiento.',
        centro: 'Dirección de Empleo, Trabajo y Emprendimiento.',
      },
      {
        nombre: 'Luisa Fernanda Martínez Vega',
        cargo: 'Coordinación Nacional de Emprendimiento.',
        centro: 'Dirección de Empleo, Trabajo y Emprendimiento.',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora instruccional.',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },

      {
        nombre: 'Miguel Ricardo Rivera Lizcano',
        cargo: 'Experto temático.',
        centro: 'Regional Huila',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñador Instruccional.',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la industria de la Comunicación gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
