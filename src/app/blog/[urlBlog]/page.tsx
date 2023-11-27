import Link from "next/link";

interface User{
  pathImage: string;
  name: string;
  socialMedias: string[];
}

interface Blogs{
  title: string;
  urlTitle: string;
  pathImage: string;
  content: string; 
  user: User;
}

const BLOGS: Blogs[] = [
  {
    title: 'Cómo afectaría la reforma a pensionados que ganan más de $10 millones al mes',
    urlTitle: 'como-afectaria-la-reforma-a-pensionados-que-ganan-mas-de-10-millones-al-mes',
    pathImage: '/assets/images/blog/blog@2x.png',
    content: `
      <p class="paragraph">
        El investigador pensional Marcelo Duque explicó a EL HERALDO
        como la reforma tributaria golpea a los pensionados.
      </p>
      <p class="paragraph">
        El investigador pensional Marcelo Duque explicó a EL HERALDO
        como la reforma tributaria golpea a los pensionados.
      </p>
      <img
        src="/assets/images/Enmascarar grupo 19@2x.png"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        El pasado martes 23 de agosto, el gobierno del presidente
        Gustavo Petro, encabezado por el ministro de Hacienda, José
        Antonio Ocampo, presentó ante el Congreso de la República el
        nuevo proyecto de reforma tributaria, que ha generado polémica
        por plantear aumentar los impuestos de las personas naturales y
        hasta a las pensionadas.
      </p>
      <p class="paragraph">
        De acuerdo con lo plasmado en la reforma, los pensionados que
        tengan ingresos mensuales después de los $10 millones pagarán
        más impuestos.
      </p>
      <p class="paragraph">
        Debido a ello, se ha generado un revuelo entre los ciudadanos,
        pues desconocen de qué se trata este nuevo impuesto y como les
        afectaría el bolsillo.
      </p>
      <p class="paragraph">
        Para el Dr. Marcelo Duque, investigador pensional y director de
        Cómo me pensiono, esta tributación que busca imponer el Gobierno
        nacional, va en contra del bienestar de los pensionados pues
        afirma que por Constitución se consideran un público en
        condición de vulnerabilidad.
      </p>
      <p class="paragraph">
        v“No estamos de acuerdo con que se le imponga impuesto a los
        pensionados y las razones son varias, la primera es que si bien
        es cierto, no hay un número muy grande de personas que superen
        una pensiones de $10 millones, la realidad es que un pensionado
        que gana $10 millones no es una persona rica. Es una persona que
        honestamente trabajó toda su vida y tuvo la posibilidad de tener
        un buen cargo”, aseguró Duque.
      </p>
    `,
    user: {
      pathImage: '/assets/images/Enmascarar grupo 18@2x.png',
      name: 'Jessica Pérez',
      socialMedias: [
        `
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        `,
        `
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        `,
      ],
    },
  },
  {
    title: '¿Por qué ser parte de una membresía probienestar después de los 50 años?',
    urlTitle: 'por-que-ser-parte-de-una-membresia-probienestar-despues-de-los-50-anos',
    pathImage: '/assets/images/blog/20200915105345_134@2x.png',
    content: `
      <p class="paragraph">
        Ser parte de una membresía que brinda acceso a un mundo de descuentos en diversas áreas que representan necesidades diarias es una oportunidad que puede marcar la diferencia en la vida de cada individuo.
      </p>
      <img
        src="/assets/images/blog/Enmascarar grupo 19@2x.png"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        Ahorro económico: Acceder a descuentos en áreas como salud, educación, bienestar, recreación, hogar y gastronomía significa un ahorro significativo en los gastos cotidianos. Los descuentos permiten maximizar el poder adquisitivo y aprovechar al máximo cada ingreso. Acceso a servicios de calidad: La membresía puede brindar acceso a servicios y productos de calidad a precios más accesibles. Esto permite disfrutar de experiencias más enriquecedoras sin sacrificar la calidad. Bienestar y salud: Obtener descuentos en servicios de salud y bienestar puede fomentar una vida más saludable y equilibrada, ya que se facilita el acceso a consultas médicas, tratamientos, gimnasios y otros servicios que promueven el bienestar físico y emocional. Crecimiento personal y profesional: La membresía puede ofrecer oportunidades de formación y capacitación en diversas áreas, lo que contribuye al crecimiento personal y profesional de cada individuo. Diversión y recreación: Con descuentos en actividades recreativas y culturales, se puede disfrutar de momentos de esparcimiento y diversión en compañía de familiares y amigos. Comodidad y conveniencia: Al tener acceso a descuentos en diversas áreas, se simplifica el proceso de búsqueda y elección de servicios y productos, ya que la membresía reúne una amplia variedad de opciones en un solo lugar. Variedad de opciones: La membresía puede ofrecer una amplia gama de descuentos en diferentes categorías, lo que brinda la libertad de elegir según los intereses y necesidades particulares de cada persona. Exclusividad y ventajas: Ser parte de una membresía puede otorgar beneficios exclusivos y oportunidades únicas que no están disponibles para el público en general. 
      </p>
      
      <p class="paragraph">
        Todos estos beneficios los encuentras en plataformas como probienestar.
      </p>
    `,
    user: {
      pathImage: '/assets/images/blog/Enmascarar grupo 18@2x.png',
      name: 'Jessica Pérez',
      socialMedias: [
        ` 
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        `,
        `
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        `,
      ],
    },
  },
  {
    title: 'Consejos para superar situaciones de abuso',
    urlTitle: 'consejos-para-superar-situaciones-de-abuso',
    pathImage: '/assets/images/blog/blog@2x.png',
    content: `
      <p class="paragraph">
        En la vida, a veces nos enfrentamos a situaciones difíciles que pueden afectar nuestra integridad emocional y física. Lamentablemente, el abuso no discrimina por edad y las personas mayores de 50 años también pueden verse atrapadas en estas situaciones. 
        Si estás pasando por una situación de abuso o conoces a alguien que lo está, es importante recordar que nunca es tarde para buscar ayuda y tomar medidas para superarla. En este artículo, exploraremos consejos valiosos para ayudar a las personas mayores de 50 años a superar situaciones de abuso.
      </p>
      <img
        src="/assets/images/blog/mujer-senior-tiro-medio-sentada-mesa.jpg"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        <strong>1. Reconoce la Situación:</strong>
        El primer paso para superar el abuso es reconocer que estás enfrentando una situación perjudicial. A veces, las personas mayores pueden minimizar o negar el abuso, pensando que es parte normal del envejecimiento. Es fundamental entender que nadie merece ser maltratado en ninguna etapa de la vida.
      </p>
      <p class="paragraph">
        <strong>2. Busca Apoyo Emocional:</strong>
        Hablar sobre el abuso puede ser difícil, pero compartir tus sentimientos con amigos, familiares o consejeros puede ser liberador. El apoyo emocional puede brindarte una perspectiva externa y ayudarte a tomar decisiones informadas sobre cómo proceder.
      </p>
      <img
        src="/assets/images/blog/senior-hombre-celebrando-su-cumpleanos.jpg"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        <strong>3. Conoce tus Derechos:</strong>
        Informarse sobre los derechos y leyes que protegen a las personas mayores en situaciones de abuso es esencial. En Colombia, existen legislaciones como la Ley 1251 de 2008 que buscan prevenir y sancionar el maltrato contra los adultos mayores. Conocer tus derechos puede empoderarte para tomar medidas legales si es necesario.
      </p>
      <p class="paragraph">
        <strong>4. Busca Ayuda Profesional:</strong>
        Consultar con profesionales de la salud mental y jurídica puede ser crucial. Los terapeutas pueden ayudarte a manejar el estrés y traumas relacionados con el abuso, mientras que los abogados especializados pueden asesorarte sobre las opciones legales disponibles.
      </p>
      <p class="paragraph">
        <strong>5. Mantén tus Redes Sociales:</strong>
        El aislamiento es común en las víctimas de abuso. Mantén tus conexiones sociales y busca actividades que disfrutes para fortalecer tu bienestar emocional. Participar en grupos de apoyo locales también puede ser una excelente manera de conocer a personas que han pasado por situaciones similares.
      </p>
      <p class="paragraph">
        <strong>6. Establece Límites:</strong>
        Aprende a establecer límites claros con personas que puedan estar involucradas en el abuso. A veces, decir "no" y establecer límites saludables es una forma poderosa de recuperar el control sobre tu vida.
      </p>
      <p class="paragraph">
        <strong>7. Planifica tu Seguridad:</strong>
        Si estás en una situación peligrosa, es importante priorizar tu seguridad. Si es necesario, busca refugio en un lugar seguro y asegúrate de tener un plan en caso de emergencia.
      </p>
      <p class="paragraph">
        <strong>8. Aprende sobre Empoderamiento:</strong>
        Educarte sobre empoderamiento y autoestima puede ser transformador. Desarrollar una mentalidad positiva y fortalecer tu autoimagen te ayudará a enfrentar y superar las dificultades.

        <br/>
        <br/>

        Recuerda que puedes también acudir a espacios seguros como la Fundación Finsocial para encontrar asesoría; superar situaciones de abuso es un proceso desafiante, pero nunca estás solo en esta lucha. 
      </p>
      
    `,
    user: {
      pathImage: '/assets/images/blog/Enmascarar grupo 18@2x.png',
      name: 'Jessica Pérez',
      socialMedias: [
        ` 
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        `,
        `
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        `,
      ],
    },
  },
  {
    title: 'Plantas ideales para cada espacio de tu hogar',
    urlTitle: 'plantas-ideales-para-cada-espacio-de-tu-hogar',
    pathImage: '/assets/images/blog/blog@2x.png',
    content: `
      <p class="paragraph">
        En la búsqueda constante de hacer de nuestros hogares lugares más acogedores y llenos de vida, la incorporación de plantas se ha convertido en una tendencia que nunca pasa de moda. Para aquellos que han cruzado la marca de los 50 años, crear un ambiente que promueva la tranquilidad y el bienestar se vuelve aún más esencial. Las plantas no solo añaden belleza estética, sino que también pueden mejorar la calidad del aire y contribuir a un estilo de vida saludable. 
      </p>
      <p class="paragraph">
        <strong>1. Sala de Estar – Calidez y Elegancia:</strong>
        Para la sala de estar, busca plantas que aporten calidez y elegancia. La Palma de Areca es perfecta para agregar altura y un aire tropical. Otra opción es el Ficus Benjamina, que añade un toque de sofisticación. Estas plantas no solo embellecen el espacio, sino que también mejoran la calidad del aire.
      </p>
      <img
        src="/assets/images/blog/producto-palma-areca.jpg"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        <strong>2. Dormitorio – Serenidad y Relajación:</strong>
        En el dormitorio, elige plantas que promuevan la tranquilidad y el descanso. La Lavanda es conocida por sus propiedades relajantes y su aroma encantador. Las suculentas, como el Sensaviera o la Haworthia, son excelentes opciones de bajo mantenimiento para añadir un toque verde a tu espacio personal.
      </p>
      <img
        src="/assets/images/blog/PLANTA-LAVANDA.jpg"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        <strong>3. Cocina – Frescura y Vitalidad:</strong>
        La cocina puede beneficiarse de plantas que purifiquen el aire y agreguen vitalidad. El Bambú de la suerte es un clásico que prospera en interiores con luz indirecta. Las hierbas como la Menta y el Orégano no solo son útiles en la cocina, sino que también llenan el espacio con aromas frescos.
      </p>
      <p class="paragraph">
        <strong>4. Baño – Spa en Casa:</strong>
        Transforma tu baño en un oasis de spa con plantas que disfruten de la humedad. La Planta de Serpiente y la Filodendro Colgante son resistentes y se adaptan bien a estos entornos. Agrega un toque de lujo con un Lirio de la Paz, cuyas flores blancas elegantes crearán una atmósfera relajante.
      </p>
      <p class="paragraph">
        <strong>5. Balcón o Terraza – Espacios al Aire Libre:</strong>
        Si tienes un balcón o terraza, aprovecha para crear un jardín en miniatura. Las Petunias o los Geranios brindan colores vivos, mientras que los Helechos agregan un toque exuberante. Las macetas colgantes con flores y plantas verdes pueden convertir tu espacio exterior en un paraíso de serenidad.
      </p>
    `,
    user: {
      pathImage: '/assets/images/blog/Enmascarar grupo 18@2x.png',
      name: 'Jessica Pérez',
      socialMedias: [
        ` 
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        `,
        `
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        `,
      ],
    },
  },
  {
    title: 'Técnicas de rejuvenecimiento después de los 50 años',
    urlTitle: 'tecnicas-de-rejuvenecimiento-despues-de-los-50-anos',
    pathImage: '/assets/images/blog/20200915105345_134@2x.png',
    content: `
      <p class="paragraph">
        El paso del tiempo es inevitable, pero afortunadamente, los avances en técnicas de rejuvenecimiento ofrecen opciones emocionantes para mantener una apariencia fresca y vital después de los 50 años. 
      </p>
      <p class="paragraph">
        <strong>1. Terapias Faciales Avanzadas:</strong>
        Las terapias faciales personalizadas son un pilar importante en el camino del rejuvenecimiento. Técnicas como el microagujado con radiofrecuencia y el peeling químico suave son altamente efectivas para reducir arrugas, líneas finas y mejorar la textura de la piel. Estos procedimientos estimulan la producción de colágeno y elastina, rejuveneciendo la piel de manera natural.
      </p>
      <p class="paragraph">
        <strong>2. Rellenos Dérmicos y Toxina Botulínica:</strong>
        Los rellenos dérmicos y la toxina botulínica son ampliamente utilizados para restaurar el volumen y reducir la apariencia de arrugas. Estos procedimientos mínimamente invasivos pueden brindar resultados notables y naturales, revitalizando áreas como los pómulos, labios y frente.
      </p>
      <img
        src="/assets/images/blog/anciana-sonriente-inyeccion-arrugas-sus-ojos.jpg"
        class="image-blog"
        alt=""
      />
      <p class="paragraph">
        <strong>3. Terapias de Láser y Luz Pulsada Intensa (IPL):</strong>
        Los tratamientos con láser y la IPL son ideales para tratar manchas de la edad, venas superficiales y mejorar la textura de la piel. Los colombianos se benefician de estos procedimientos para mantener una piel uniforme y radiante, especialmente en un clima soleado.
      </p>
      <p class="paragraph">
        <strong>4. Tratamientos Corporales Reafirmantes:</strong>
        El rejuvenecimiento no se limita al rostro. Tratamientos corporales como la radiofrecuencia corporal y la terapia de ultrasonido focalizado son efectivos para tensar la piel y reducir la celulitis en áreas problemáticas, brindando confianza y vitalidad en cualquier momento.
      </p>
      <p class="paragraph">
        <strong>5. Nutrición y Cuidado Interno:</strong>
        El enfoque en la belleza exterior debe ir de la mano con el cuidado interno. La nutrición adecuada y la hidratación son esenciales para mantener una piel radiante. Considera consultar con un profesional de la salud para diseñar una dieta rica en antioxidantes, vitaminas y minerales.
        <br/>
        <br/>
        La belleza no tiene edad, y en Colombia, las técnicas de rejuvenecimiento ofrecen un abanico de posibilidades para abrazar la vida con confianza y vitalidad después de los 50 años. Ya sea que optes por tratamientos faciales avanzados, terapias corporales reafirmantes o enfoques holísticos para el bienestar, recuerda que el rejuvenecimiento es una inversión en ti mismo. Consulta todos los tratamientos de rejuvenecimiento que encontrarás en finsospa. 
      </p>
    `,
    user: {
      pathImage: '/assets/images/blog/Enmascarar grupo 18@2x.png',
      name: 'Jessica Pérez',
      socialMedias: [
        ` 
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        `,
        `
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        `,
      ],
    },
  },
] 

export default function Tendencias({ params }: { params: { urlBlog: string } }) {

  const foundBlog = BLOGS.find(blog => blog.urlTitle === params.urlBlog);

  if (!foundBlog) {
    return (
      <main role="main">
        <div className="max-w-screen-xl w-full mx-auto mt-10 mb-10">

          <div className="flex items-center">
            <Link href="/blog">
              <button className="text-gray-700" type="button">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  <span className="font-semibold">Volver</span>
                </div>
              </button>
            </Link>
            <h1 className="text-center text-primary-violet-01 font-Montserrat-Bold mx-auto text-3xl">Blog no encontrado</h1>
          </div>

        </div>
      </main>
    ) 
    ;
  }

  const { title, pathImage, content, user } = foundBlog;

  return (
    <>
      <main role="main">
        <div className="max-w-screen-xl w-full mx-auto mb-10">
          <section role="banner">
            <div className={` w-full h-[22.3125rem] bg-cover object-cover flex items-center`} style={{ backgroundImage: `url(${pathImage})` }}></div>
          </section>
        </div>

        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <div className="hidden mb-6 xl:block lg:w-52">
            <div className="sticky top-24">
              <img
                className="rounded-full w-36 h-36 mb-8"
                src={user.pathImage}
                alt="Extra large avatar"
              />
              <div className="mb-4">
                <p className="text-lg">
                  Por:
                </p>
                <p className="text-lg font-bold">{user.name}</p>
              </div>
              <div className="flex justify-between items-center">
                <aside
                  className="flex flex-wrap"
                  aria-label="Share social media"
                >
                  {
                    user.socialMedias.map((socialMedia, index)=>(
                      <a
                        key={index}
                        href="#"
                        className="inline-flex items-center p-2 mr-2 text-xs font-medium text-white no-underline bg-gray-700 rounded-full border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          dangerouslySetInnerHTML={{ __html: socialMedia }}
                        >
                        </svg>
                      </a>
                    ))
                  }
                </aside>
              </div>
            </div>
          </div>
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl text-center lg:text-left font-semibold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                {title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: content }} ></div>
            </header>
          </article>
          <div className="hidden mb-6 lg:block lg:w-72">
            <div className="sticky top-24">
              <img
                src="/assets/images/Grupo 974@2x.png"
                alt="google analitys"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
