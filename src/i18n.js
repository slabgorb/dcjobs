import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        title1: "Exclusive Job Matching",
        body1: "Our core offering revolves around connecting highly qualified candidates with premium job opportunities. We leverage our extensive network of trusted employers in the DMV area to match you with roles that align perfectly with your skills and ambitions. Whether you&#39;re seeking a position in IT, cybersecurity, diesel tech, app development, or gaming, we have exclusive job listings waiting for you.",
        title2:  "Career Consultation",
        body2: "At Elite Talent Connect, we understand that a successful career is more than just finding the right job; it&#39;s about long-term growth and fulfillment. Our experienced career consultants are here to provide personalized guidance, helping you chart a strategic career path that aligns with your goals and aspirations.",
        title3: "Resume Optimization",
        body3: "Make a lasting impression with a professionally crafted resume tailored to your industry. Our experts will work closely with you to highlight your skills and experiences, ensuring that your resume stands out to potential employers in the highly competitive job market.",
        title4:  "Interview Preparation",
        body4: "Ace your interviews with confidence. Our interview preparation services equip you with the knowledge and techniques to excel in interviews specific to your industry. From technical questions to behavioral assessments, we&#39;ll help you shine during every interaction with potential employers",
        title5: "Industry Insights",
        body5: "Stay ahead of industry trends and developments with our regular industry insights and updates. We provide valuable information, tips, and resources to help you navigate the ever-evolving landscapes of IT, cybersecurity, diesel tech, app development, and gaming.",
        title6: "Ongoing Support",
        body6: "Your journey doesn&#39; t end when you secure a job through Elite Talent Connect.We provide continuous support throughout your career, ensuring that you remain on the path to success. From skill development opportunities to networking events, we&#39;re committed to your professional growth.",
        title7:  "Exclusive Networking",
        body7: "Join a community of like-minded professionals through our exclusive networking events and forums. Connect with peers and industry leaders, expanding your circle of influence and opening doors to new opportunities.",
        title8: "Specialized Training",
        body8: "Enhance your skills and expertise with our specialized training programs designed to meet the unique demands of IT, cybersecurity, diesel tech, app development, and gaming professionals. Stay ahead of the curve with cutting-edge knowledge and certifications.",
        title9: "Personalized Job Alerts",
        body9: "Never miss out on a job opportunity that matches your criteria. Receive personalized job alerts directly in your inbox, ensuring you&#39;re always one step ahead in your job search.",
        title10: "Confidentiality Guaranteed",
        body10: "Rest assured that your personal and professional information is handled with the utmost confidentiality. Your privacy is our priority.",
      reviews: "Reviews",
      get_directions: "Get Directions",
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
        "Elite Talent Connect team are life-savers. I felt overwhelmed with all the competition in todays job market. Thank you, with all my heart.",
      connect: "Connect with us",
      about:
        "Elite Talent Connect assists applicants in locating available jobs in the DMV area. We have several employers with jobs to fill and we connect clients with them. We have over 25 years experience in connecting clients with employers. We partner with several employers in the DMV area who utilize our services to fill their open job opportunities. They are confident they can rely on our services to send them the best candidates to fill their positions.",
      types:
        "We assist our clients in attaining positions that normally don't have agency support. We have positions such as Warehouse, Maintenance, Restaurant, Hotel, Customer Service, Drivers, Construction and Entry Level Office positions. Many people who qualify for these positions don't have the inside info or representation to get them the competitive edge need in today's job market.",
      why: "Why choose DCJRS over free agencies?",
      why1: "Like the old saying goes; you get what you pay for. With free platforms, you compete with any and everyone with internet access. With us, you are joining a service that requires a subscription. That gets your the foot in the door, which is needed in todays' market",
      why2: "Our employers are aware you are registered with us and they are more willing to consider people with representation as opposed to those from a free listing. In many cases, a foot in the door is all that's needed for many good people.",
      why3: "Let us help get your foot in the door so you can enter with respect and strong consideration.",
      review1:
        "My job search runs smoother and more efficient since I found Elite Talent Connect. They are a part of my team!",
      review2:
        "Easy communication and always there when I need them. Highly Recommended!",
      review3:
        "I can't say enough about how professional they are. They help me to make informed decisions.",
    },
  },
  es: {
      translation: {
          title1: "Emparejamiento de trabajo exclusivo",
          body1: "Nuestra oferta principal gira en torno a conectar a candidatos altamente calificados con oportunidades de trabajo premium. Aprovechamos nuestra extensa red de empleadores de confianza en el área del DMV para combinarlo con roles que se alinean perfectamente con sus habilidades y ambiciones. Ya sea que esté buscando un puesto en TI, ciberseguridad, tecnología diesel, desarrollo de aplicaciones o juegos, tenemos listados de trabajo exclusivos esperándolo.",
          title2: "Consulta de carrera",
          body2: "En Elite Talent Connect, entendemos que una carrera exitosa es más que encontrar el trabajo adecuado; se trata de un crecimiento y una realización a largo plazo. Nuestros experimentados consultores de carrera están aquí para brindarle orientación personalizada, ayudándole a trazar un camino profesional estratégico que se alinee con sus objetivos y aspiraciones.",
          title3: "Optimización de currículum",
          body3: "Cree una impresión duradera con un currículum profesional elaborado a medida para su industria. Nuestros expertos trabajarán en estrecha colaboración con usted para resaltar sus habilidades y experiencias, asegurando que su currículum se destaque para los posibles empleadores en el mercado laboral altamente competitivo.",
          title4: "Preparación de entrevistas",
          body4: "Supere sus entrevistas con confianza. Nuestros servicios de preparación para entrevistas lo equipan con el conocimiento y las técnicas para sobresalir en las entrevistas específicas de su industria. Desde preguntas técnicas hasta evaluaciones de comportamiento, lo ayudaremos a brillar durante cada interacción con posibles empleadores",
          title5: "Información de la industria",
          body5: "Manténgase al día de las tendencias y desarrollos de la industria con nuestras actualizaciones e información periódicas de la industria. Brindamos información valiosa, consejos y recursos para ayudarlo a navegar por los paisajes en constante evolución de TI, ciberseguridad, tecnología diesel, desarrollo de aplicaciones y juegos.",
          title6: "Soporte continuo",
          body6: "Su viaje no termina cuando asegura un trabajo a través de Elite Talent Connect. Brindamos soporte continuo a lo largo de su carrera, asegurando que permanezca en el camino hacia el éxito. Desde oportunidades de desarrollo de habilidades hasta eventos de redes, estamos comprometidos con su crecimiento profesional.",
          title7: "Networking exclusivo",
          body7: "Únase a una comunidad de profesionales con ideas afines a través de nuestros eventos y foros de redes exclusivos. Conéctese con colegas y líderes de la industria, ampliando su círculo de influencia y abriendo puertas a nuevas oportunidades.",
          title8: "Formación especializada",
          body8: "Mejore sus habilidades y conocimientos con nuestros programas de capacitación especializados diseñados para satisfacer las demandas únicas de los profesionales de TI, ciberseguridad, tecnología diesel, desarrollo de aplicaciones y juegos. Manténgase a la vanguardia con conocimientos y certificaciones de vanguardia.",
          title9: "Alertas de trabajo personalizadas",
          body9: "Nunca se pierda una oportunidad de trabajo que coincida con sus criterios. Reciba alertas de trabajo personalizadas directamente en su bandeja de entrada, asegurando que siempre esté un paso adelante en su búsqueda de trabajo.",
          title10: "Confidencialidad garantizada",
          body10: "Tenga la seguridad de que su información personal y profesional se maneja con la máxima confidencialidad. Su privacidad es nuestra prioridad.",
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
        "El equipo de Elite Talent Connect es un salvavidas. Me sentí abrumado con toda la competencia en el mercado laboral actual. Gracias con todo mi corazón.",
      connect: "Conéctate con nosotros",
      about:
        "El Servicio de referencia de trabajos de DC ayuda a los solicitantes a encontrar trabajos disponibles en el área del DMV.  Tenemos varios empleadores con trabajos para llenar y conectamos a los clientes con ellos.  Tenemos más de 25 años de experiencia conectando clientes con empleadores. Nos asociamos con varios empleadores en el área del DMV que utilizan nuestros servicios para llenar su oportunidad de trabajo abierta.",
      types:
        "Ayudamos a nuestros clientes a alcanzar puestos que normalmente no cuentan con el apoyo de una agencia.  Tenemos puestos como almacén, mantenimiento, restaurante, hotel, servicio al cliente, conductores, construcción y puestos de oficina de nivel de entrada. Muchas personas que califican para estos puestos no tienen informacion interna o representacion para obtener la ventaja competitivia que necesitan en el mercado laboral actual.",
      why: "¿Por qué elegir Elite Talent Connect sobre agencias gratuitas?",
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
