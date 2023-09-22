import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About",
            start: "Start Now!",
            about_title1: "Exclusive Job Matching",
            about_body1: "Our core offering revolves around connecting highly qualified candidates with premium job opportunities. We leverage our extensive network of trusted employers in the DMV area to match you with roles that align perfectly with your skills and ambitions. Whether you&#39;re seeking a position in IT, cybersecurity, diesel tech, app development, or gaming, we have exclusive job listings waiting for you.",
            about_title2: "Career Consultation",
            about_body2: "At Elite Talent Connect, we understand that a successful career is more than just finding the right job; it&#39;s about long-term growth and fulfillment. Our experienced career consultants are here to provide personalized guidance, helping you chart a strategic career path that aligns with your goals and aspirations.",
            about_title3: "Resume Optimization",
            about_body3: "Make a lasting impression with a professionally crafted resume tailored to your industry. Our experts will work closely with you to highlight your skills and experiences, ensuring that your resume stands out to potential employers in the highly competitive job market.",
            about_title4: "Interview Preparation",
            about_body4: "Ace your interviews with confidence. Our interview preparation services equip you with the knowledge and techniques to excel in interviews specific to your industry. From technical questions to behavioral assessments, we&#39;ll help you shine during every interaction with potential employers",
            about_title5: "Industry Insights",
            about_body5: "Stay ahead of industry trends and developments with our regular industry insights and updates. We provide valuable information, tips, and resources to help you navigate the ever-evolving landscapes of IT, cybersecurity, diesel tech, app development, and gaming.",
            about_title6: "Ongoing Support",
            about_body6: "Your journey doesn&#39; t end when you secure a job through Elite Talent Connect.We provide continuous support throughout your career, ensuring that you remain on the path to success. From skill development opportunities to networking events, we&#39;re committed to your professional growth.",
            about_title7: "Exclusive Networking",
            about_body7: "Join a community of like-minded professionals through our exclusive networking events and forums. Connect with peers and industry leaders, expanding your circle of influence and opening doors to new opportunities.",
            about_title8: "Specialized Training",
            about_body8: "Enhance your skills and expertise with our specialized training programs designed to meet the unique demands of IT, cybersecurity, diesel tech, app development, and gaming professionals. Stay ahead of the curve with cutting-edge knowledge and certifications.",
            about_title9: "Personalized Job Alerts",
            about_body9: "Never miss out on a job opportunity that matches your criteria. Receive personalized job alerts directly in your inbox, ensuring you&#39;re always one step ahead in your job search.",
            about_title10: "Confidentiality Guaranteed",
            about_body10: "Rest assured that your personal and professional information is handled with the utmost confidentiality. Your privacy is our priority.",

            reviews: "Reviews",
            get_directions: "Get Directions",
            about_title: "About Us",
            title: "Build your exposure to employers, grow your visibility.",
            subheader: "Dedicated, personalised service",
            testimomials: "Testimonials",
            testimonial1:
                "Elite Talent Connect team are life-savers. I felt overwhelmed with all the competition in todays job market. Thank you, with all my heart.",
            connect: "Connect with us",
            types:
                "We assist our clients in attaining positions that normally don't have agency support. We have positions such as Warehouse, Maintenance, Restaurant, Hotel, Customer Service, Drivers, Construction and Entry Level Office positions. Many people who qualify for these positions don't have the inside info or representation to get them the competitive edge need in today's job market.",
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

            home: "Inicio",
            about: "Sobre",
            start: "Comienza ahora!",
            about_title1: "Emparejamiento de trabajo exclusivo",
            about_body1: "Nuestra oferta principal gira en torno a conectar a candidatos altamente calificados con oportunidades de trabajo premium. Aprovechamos nuestra extensa red de empleadores de confianza en el área del DMV para combinarlo con roles que se alinean perfectamente con sus habilidades y ambiciones. Ya sea que esté buscando un puesto en TI, ciberseguridad, tecnología diesel, desarrollo de aplicaciones o juegos, tenemos listados de trabajo exclusivos esperándolo.",
            about_title2: "Consulta de carrera",
            about_body2: "En Elite Talent Connect, entendemos que una carrera exitosa es más que encontrar el trabajo adecuado; se trata de un crecimiento y una realización a largo plazo. Nuestros experimentados consultores de carrera están aquí para brindarle orientación personalizada, ayudándole a trazar un camino profesional estratégico que se alinee con sus objetivos y aspiraciones.",
            about_title3: "Optimización de currículum",
            about_body3: "Cree una impresión duradera con un currículum profesional elaborado a medida para su industria. Nuestros expertos trabajarán en estrecha colaboración con usted para resaltar sus habilidades y experiencias, asegurando que su currículum se destaque para los posibles empleadores en el mercado laboral altamente competitivo.",
            about_title4: "Preparación de entrevistas",
            about_body4: "Supere sus entrevistas con confianza. Nuestros servicios de preparación para entrevistas lo equipan con el conocimiento y las técnicas para sobresalir en las entrevistas específicas de su industria. Desde preguntas técnicas hasta evaluaciones de comportamiento, lo ayudaremos a brillar durante cada interacción con posibles empleadores",
            about_title5: "Información de la industria",
            about_body5: "Manténgase al día de las tendencias y desarrollos de la industria con nuestras actualizaciones e información periódicas de la industria. Brindamos información valiosa, consejos y recursos para ayudarlo a navegar por los paisajes en constante evolución de TI, ciberseguridad, tecnología diesel, desarrollo de aplicaciones y juegos.",
            about_title6: "Soporte continuo",
            about_body6: "Su viaje no termina cuando asegura un trabajo a través de Elite Talent Connect. Brindamos soporte continuo a lo largo de su carrera, asegurando que permanezca en el camino hacia el éxito. Desde oportunidades de desarrollo de habilidades hasta eventos de redes, estamos comprometidos con su crecimiento profesional.",
            about_title7: "Networking exclusivo",
            about_body7: "Únase a una comunidad de profesionales con ideas afines a través de nuestros eventos y foros de redes exclusivos. Conéctese con colegas y líderes de la industria, ampliando su círculo de influencia y abriendo puertas a nuevas oportunidades.",
            about_title8: "Formación especializada",
            about_body8: "Mejore sus habilidades y conocimientos con nuestros programas de capacitación especializados diseñados para satisfacer las demandas únicas de los profesionales de TI, ciberseguridad, tecnología diesel, desarrollo de aplicaciones y juegos. Manténgase a la vanguardia con conocimientos y certificaciones de vanguardia.",
            about_title9: "Alertas de trabajo personalizadas",
            about_body9: "Nunca se pierda una oportunidad de trabajo que coincida con sus criterios. Reciba alertas de trabajo personalizadas directamente en su bandeja de entrada, asegurando que siempre esté un paso adelante en su búsqueda de trabajo.",
            about_title10: "Confidencialidad garantizada",
            about_body10: "Tenga la seguridad de que su información personal y profesional se maneja con la máxima confidencialidad. Su privacidad es nuestra prioridad.",
            subheader: "Servicio dedicado y personalizado",
            testimomials: "Testimonios",
            testiomonial1:
                "El equipo de Elite Talent Connect es un salvavidas. Me sentí abrumado con toda la competencia en el mercado laboral actual. Gracias con todo mi corazón.",
            connect: "Conéctate con nosotros",
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
        }
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
