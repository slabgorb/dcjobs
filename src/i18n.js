import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      reviews: "Reviews",
      about_title: "About Us",
      title: "Build your exposure to employers, grow your visibility.",
      subheader: "Dedicated, personalised service",
      question1: "What types of jobs are offered?",
      answer1:
        "We have jobs such as Warehouse, Maintenance, Drivers, Restaurant, Hotel, Customer Service and more.",
      question2: "Why do I pay before getting a job?",
      answer2:
        "Our registration is a one time payable fee, which makes all your paychecks yours to keep. No percentage of your checks go to us.",
      answer2_1:
        "We contact employers on your behalf in recognition that most agencies and referral services specialize in skilled careers, such as accounting and IT. We want to represent the unrepresented and we will represent you as a client who deserves the same representation as highly skilled workers.",
      testimomials: "Testimonials",
      testiomonial1:
        "DC Jobs Referral Services team are life-savers. I felt overwhelmed with all the competition in todays job market. Thank you, with all my heart.",
      connect: "Connect with us",
      about:
        "DC Jobs Referral Service assists applicants in locating available jobs in the DMV area. We have several employers with jobs to fill and we connect clients with them. We have over 25 years experience in connecting clients with employers. We partner with several employers in the DMV area who utilize our services to fill their open job opportunities. They are confident they can rely on our services to send them the best candidates to fill their positions.",
      types:
        "We assist our clients in attaining positions that normally don't have agency support. We have positions such as Warehouse, Maintenance, Restaurant, Hotel, Customer Service, Drivers, Construction and Entry Level Office positions. Many people who qualify for these positions don't have the inside info or representation to get them the competitive edge need in today's job market.",
      why: "Why choose DCJRS over free agencies?",
      why1: "Like the old saying goes; you get what you pay for. With free platforms, you compete with any and everyone with internet access. With us, you are joining a service that requires a subscription. That gets your the foot in the door, which is needed in todays' market",
      why2: "Our employers are aware you are registered with us and they are more willing to consider people with representation as opposed to those from a free listing. In many cases, a foot in the door is all that's needed for many good people.",
      why3: "Let us help get your foot in the door so you can enter with respect and strong consideration.",
      review1:
        "My job search runs smoother and more efficient since I found DC Jobs Referral Service. They are a part of my team!",
      review2:
        "Easy communication and always there when I need them. Highly Recommended!",
      review3:
        "I can't say enough about how professional they are. They help me to make informed decisions.",
    },
  },
  es: {
    translation: {
      reviews: "Reseñas",
      about_title: "Sobre Nosotros",
      title: "Aumente su exposición a los empleadores, aumente su visibilidad",
      subheader: "Servicio dedicado y personalizado",
      question1: "¿Qué tipos de trabajos se ofrecen?",
      question2: "¿Por qué pago antes de conseguir un trabajo?",
      answer1:
        "Contamos con trabajos como Bodega, Mantenimiento, Choferes, Restaurante, Hotel, Servicio al Cliente y más",
      answer2:
        "Nuestro registro es una tarifa pagadera única, lo que hace que todos sus cheques de pago sean suyos. Ningún porcentaje de sus cheques va para nosotros.",
      answer2_1:
        "Nos ponemos en contacto con los empleadores en su nombre porque reconocemos que la mayoría de las agencias y los servicios de referencia se especializan en carreras especializadas, como contabilidad e informática.Queremos representar a los no representados y lo representaremos a usted como un cliente que merece la misma representación que los trabajadores altamente calificados.",
      testimomials: "Testimonios",
      testiomonial1:
        "El equipo de DC Jobs Referral Services es un salvavidas. Me sentí abrumado con toda la competencia en el mercado laboral actual. Gracias con todo mi corazón.",
      connect: "Conéctate con nosotros",
      about:
        "El Servicio de referencia de trabajos de DC ayuda a los solicitantes a encontrar trabajos disponibles en el área del DMV.  Tenemos varios empleadores con trabajos para llenar y conectamos a los clientes con ellos.  Tenemos más de 25 años de experiencia conectando clientes con empleadores. Nos asociamos con varios empleadores en el área del DMV que utilizan nuestros servicios para llenar su oportunidad de trabajo abierta.",
      types:
        "Ayudamos a nuestros clientes a alcanzar puestos que normalmente no cuentan con el apoyo de una agencia.  Tenemos puestos como almacén, mantenimiento, restaurante, hotel, servicio al cliente, conductores, construcción y puestos de oficina de nivel de entrada. Muchas personas que califican para estos puestos no tienen informacion interna o representacion para obtener la ventaja competitivia que necesitan en el mercado laboral actual.",
      why: "¿Por qué elegir DCJRS sobre agencias gratuitas?",
      why1: " Como dice el viejo refrán;  tienes lo que pagas.  Con las plataformas gratuitas, compites con todos y cada uno de los que tienen acceso a Internet.  Con nosotros, te unes a un servicio que requiere una suscripción.  Eso pone el pie en la puerta, lo que se necesita en el mercado actual.",
      why2: "Nuestros empleadores saben que está registrado con nosotros y están más dispuestos a considerar a las personas con representación en lugar de las de una lista gratuita.  En muchos casos, un pie en la puerta es todo lo que se necesita para mucha gente buena.",
      why3: "Permítanos ayudarlo a poner su pie en la puerta para que pueda entrar con respeto y consideración.",
      review1:
        "Mi búsqueda de trabajo es más fluida y eficiente desde que encontré el Servicio de Refe",
      review2:
        "Fácil comunicación y siempre ahí cuando los necesito. ¡Muy recomendable!",
      review3:
        "No puedo decir lo suficiente sobre lo profesionales que son. Me ayudan a tomar decisiones informadas.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
