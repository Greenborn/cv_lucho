
export const INFO_CV = {

    'perfil':{
        puesto: "Desarrollador Web - FullStack",
        descripcion_puesto: "",
        nombre_completo: "Luciano Nicolás Vega",
        fecha_nacimiento: "16/02/1994",
        nacionalidad: "Argentino",
        ciudad_residencia: "Tandil",
        provincia_residencia: "Buenos Aires",
        email: "luciano.n.vega@gmail.com",
        link_github: "https://github.com/2012lucho",
        link_linkedin: "https://www.linkedin.com/in/luciano-vega-56097176/"
    },

    'haciendo_actualmente': [
        {
            titulo: "Grupo Fotográfico Centro",
            descripcion_organizacion: `Desarrollo de Sistema de Gestión de Concursos Fotográficos para El GFC (Grupo Fotográfico Centro) que agrupa desde 
            el año 1967 a los fotoclubes del centro este de la provincia de Buenos Aires 
            pertenecientes a la F.A.F (Federación Argentina de Fotografía). Las ciudades que se encuentran representadas actualmente son: Balcarce, 
            Benito Juarez, Necochea, Olavarria y Tandil. 
            Cuenta como objetivo la promoción de la actividad fotográfica en el ámbito fotoclubista y el aprendizaje continuo.`,
            url: "https://www.grupofotograficocentro.com/",
            tareas_realizadas: ["Desarrollo","Mantenimiento","DevOps", "Construcción de Reportes"],
            tecnologias_usadas: ["PHP", "Yii", "Postgres", "Angular", "Ionic"]
        },
        {
            titulo: "Buscador e Histórico de Precios",
            descripcion_organizacion: `Comenzó con la idea de generar una base de datos para el seguimiento de la evolución de los precios a nivel local 
            en momentos de incertidumbre económica, y falta de datos fiables sobre precios, luego se agregó la posibilidad de realizar búsquedas.
            \n\n Los precios se obtienen a partir del Scraping de sitios que hacen públicos sus precios, para lo que fue necesario desarrollar un 
            servicio que coordina la ejecución de los scrapper's y centraliza la información para su posterior almacenamiento en la base de datos.`,
            url: "https://precios.greenborn.com.ar/",
            tareas_realizadas: ["Desarrollo","Mantenimiento","DevOps"],
            tecnologias_usadas: ["NodeJS", "Express", "MariaDB", "Vue", "Bootstrap", "Python", "Selenium"]
        },
        {
            titulo: "Instancia propia de Redmine",
            descripcion_organizacion: `Gestión de instancia propia de Redmine para gestión de las tareas del día a día.`,
            url: "https://redmine.greenborn.com.ar/",
            tareas_realizadas: ["DevOps"],
            tecnologias_usadas: ["Redmine", "Nginx", "MariaDB"]
        },
        {
            titulo: "Web Hosting Wordpress",
            descripcion_organizacion: `Proporciono servicios de hosting de Wordpress, actualización de plugins y temas, backups, etc. 
            por el momento para un cliente de un blog literario denominado Titanes de Cristal.`,
            url: "https://titanesdecristal.com/",
            tareas_realizadas: ["DevOps"],
            tecnologias_usadas: ["WordPress", "Nginx", "PHP-FPM", "MariaDB"]
        },
        {
            titulo: "Mapa de Quejas y Reclamos",
            descripcion_organizacion: `Se trata de un tablero público de reclamos en donde cualquier usuario puede subir una queja geolocandizándola con 
            su ubicación actual o la que proporcione, una breve descripción y hasta tres imágenes.
            \n\n Uno de sus objetivos es ser una prueba de concepto y base para posibles aplicaciones que requieran la geolocalización.`,
            url: "https://titanesdecristal.com/",
            tareas_realizadas: ["DevOps","Desarrollo","Mantenimiento",],
            tecnologias_usadas: ["Open Street Map","Vue", "Express", "NodeJS", "MariaDB", "MariaDB"]
        }
    ],
    
    'estudios': [
        {
            institucion: "UNICEN",
            titulo: "Ing. en Sistemas - no finalizada",
            inicio: "2012",
            egresado: "",
            completo: true,
            experiencia_especifica: [

            ]
        },
        {
            institucion: "EET Nº2 - Ing. Felipe Senillosa",
            titulo: "Tecnico en Informática Personal y Profesional",
            inicio: "2008",
            egresado: "2011",
            completo: true
        },
    ],

    'experiencia_laboral': [
        {
            puesto: "Desarrollador Web - FullStack",
            inicio: "2020",
            fin: "2024",
            empresa_organizacion: "Greenborn",
            descripcion: `Microempresa de Software, aceptando trabajos de desarrollo de software a medida, centrándose en el desarrollo
            de bots de web scraping, sistemas de gestión de pequeño y mediano alcance, ampliación de sistemas en funcionamiento, QA, mantenimiento de
            proyectos Legacy entre otras actividades.`,
            experiencia_especifica: [
                {
                    titulo: "Búsqueda de trabajo en plataformas Freelance.",
                    descripcion: `Busqueda en plataformas de trabajo en Freelancer y Workana, de vez en cuando busco trabajo por allí pero debido a malas
                    experiencias busco trabajar por otros medios.`
                },
                {
                    titulo: "Desarrollo Web FullStack.",
                    descripcion: `Desarrollo de sistemas a medida, desarrollo de nuevas funcionalidades en sistemas ya existentes, mantenimiento de proyectos Legacy,
                    QA, y resolución de errores.`
                },
                {
                    titulo: "Configuración de Servidores",
                    descripcion: `Configuración integral de VPS para el hosting y la ejecución de aplicaciones Web, en plataformas como AWS, DigitalOcean, 
                    Don Web, entre otras. encargandome de la configuración de Nginx, PHP, MariaDB, Postgres, de la configuración de puertos abiertos, 
                    el entorno de desarrollo y de gestión de procesos de NodeJS (NPM, PM2), configuración de serviciós del sistema específicos, subida de archivos por SSH y FTP, despliegue de 
                    sistemas con Docker o Manualmente, configuración de registros DNS, entre otras actividades.`
                },
                {
                    titulo: "Testing",
                    descripcion: `Dada la importancia de la QA en el desarrollo de software, me encargo de realizar pruebas 
                    para reducir la prevalencia de bugs y mejorar la calidad del producto.`
                },
                {
                    titulo: "Comunicación con Clientes",
                    descripcion: ``
                },
            ]
        },
        {
            puesto: "Desarrollador Web - FullStack",
            inicio: "2014",
            fin: "2021",
            empresa_organizacion: "Coop. Coodesoft",
            descripcion: `Coodesoft es una cooperativa de desarrollo de Software Libre, de la que fui parte durante su
            proceso fundacional en conjunto con compañeros de estudio en la Facultad de Ciencias Exactas (UNICEN), 
            en ese periodo además de aprender conceptos en cuanto al desarrollo de Software, también ayudo a formar habilidades 
            blandas como el Trabajo en Equipo, la Comunicación y la Organización que conlleva llevar adelante un proyecto autogestivo.`,
            experiencia_especifica: [
                {
                    titulo: "Búsqueda de trabajo en plataformas Freelance",
                    descripcion: `Una de mis tareas era la búsqueda de trabajo, para lo cual decidimos buscar en Workana y Freelancer, debí
                    aprender a como realizar un presupuesto así como mejorar mi estimación de plazos (en un principio tendía a sub-estimar el trabajo),
                    me tocaron diferentes tipos de trabajos, lo que también me permitió aprender de ellos así como tener una mejor comprensión sobre los
                    stacks más requeridos.`,
                    habilidades: ["+ Confección de Presupuesto", "+ Ventas"]
                },
                {
                    titulo: "Desarrollo Web FullStack",
                    descripcion: ``
                },
                {
                    titulo: "Configuración de Servidores",
                    descripcion: ""
                },
                {
                    titulo: "Testing",
                    descripcion: ""
                },
                {
                    titulo: "Comunicación con Clientes",
                    descripcion: ""
                },
            ]
        },
        {
            puesto: "Docente Informática",
            inicio: "2015",
            fin: "2016",
            empresa_organizacion: "Plan FINES",
            descripcion: `Debía ocuparme de dar clases de Informática para el Secundario de Adultos que cursaban el plan FINES
             (Finalización de Estudios Secundarios) para 1º y 2º, en diversas instituciones de la ciudad que prestaban sus
             espacios.`,
            experiencia_especifica: [
                {
                    titulo: "Confección de un plan de estudio",
                    descripcion: `Debí interiorizarme en la creación de un plan de estudios para la escuela secundaria, para este caso la major opción era
                    reautilizar un plan de estudios ya aprovados de forma que el trabajo fuese más eficiente pudiendo centrarme en el desarrollo de cada
                    una de las clases (16 en el semestre). Tmabién aprendí las dinámicas propias de los Actos Docentes, reuniones en las cuales se tomaban
                    las horas de acuerdo al orden de llegada.`,
                    habilidades: ["+ Adaptabilidad", "+ Diseño de Plan de Estudio"]
                },
                {
                    titulo: "Llevar una clase en diversos contextos institucionales",
                    descripcion: `El espacio de trabajo podía ser una escuela, un club de barrio, un centro de salud, un local partidario, etc. 
                    en zonas variadas de la ciudad algunos en el centro y otros en la periferia, por lo que los estudiantes eran persona de todas las 
                    edades, procedencias e historias de vidas. Por lo que debí mejorar mi comunicación con los demás.`,
                    habilidades: ["+ Adaptabilidad", "+ Comunicación"]
                }
            ]
        },
        /*{
            puesto: "Técnico en Informática",
            inicio: "2011",
            fin: "2014",
            empresa_organizacion: "Cuenta Propia",
            descripcion: `Realizaba tareas de mantenimiento, actualización y reparación de computadoras y notebooks en comercios
            y casas particulares, también me dediqué a la compra y venta de equipos usados así como a la venta de routers inalámbricos.`,
            experiencia_especifica: [
                {
                    titulo: "Diseño de Folletos",
                    descripcion: `Con la necesidad de autopublicitarme necesité diseñar mis propios folletos, debí aprender por mi cuenta a partir
                     de múltiples fuentes de información usando herramientas libres. Los mismos fueron pensados para ser impresos en cualquier fotocopiadora
                      de la ciudad de forma de ahorrar los mayores costos sin sacrificar calidad.`,
                    habilidades: ["+ Adaptabilidad", "+ Diseño"]
                },
                {
                    titulo: "Reparto de Folletos",
                    descripcion: `Los folletos una vez impresos debian ser entregados puerta a puerta, por lo que debí planificar el recorrido por diverzas
                     zonas de la ciudad.`,
                    habilidades: ["+ Adaptabilidad", "+ Estado Físico", "+ Planificación"]
                },
                {
                    titulo: "Ventas",
                    descripcion: `Parte de las actividades económicas era la compra y venta de computadoras usadas, las cuales reacondicionaba las actualizaba
                    y las volvia a vender, sacando el mayor provecho posible de equipos antiguos aunque aún no obsoletos.`,
                    habilidades: ["+ Adaptabilidad", "+ Ventas"]
                },
                {
                    titulo: "Servicio Técnico Domiciliario",
                    descripcion: `El servicio técnico casi siempre se realizaba a domicilio, con visitas de entre 30 minutos y 4 horas segun fuera el caso,
                    en general acupándome de ayudar a resolver los problemas planteados por los usuarios, buscando realizar el trabajo de la forma más 
                    rápida posible.`,
                    habilidades: ["+ Adaptabilidad"]
                },
            ]
        }*/
    ],

    'idiomas': [
        {
            idioma: "Inglés",
            nivel: "A2"
        },
        {
            idioma: "Español",
            nivel: "Nativo"
        }
    ],

    'habilidades': {
        "Soft Skill's":['Trabajo en Equipo', 'Capacidad de Resolución de Problemas', 'Comunicación', 'Adaptabilidad', 'Planificación'],
        "Herramientas Organización":["GIT", "Redmine", "Trello"],
        "Herramientas Despliege":["Docker"],
        "Responsabilidades":["Desarrollador","DevOps","QA"],            
        "Lenguajes Programación": [ "JavaScript", "NodeJS", "PHP", "Python", "Java", "SQL", "HTML", "CSS"],
        "Gestores Bases de Datos": ["MongoDB", "Postgres", "MySQL / MariaDB"],
        "Framework's FrontEnd": ["Vue", "Angular", "Ionic", "React", "Bootstrap"],
        "Framework's BackEnd": ["Express", "Symphony", "Laravel", "Yii"],
        "CMS's": ["WordPress","Ghost", "Drupal"]        
    },

    'intereses': [
        {
            titulo: "Software Libre"
        },
        {
            titulo: "Blockchain"
        },
        {
            titulo: "Desarrollo de Videojuegos"
        }
    ]
}