import Image from "next/image";
import styles from "./card.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <h1 className='mobile:mt-10 mobile:text-2xl mobile:font-semibold mobile:text-slate-900 desktop:mt-20'>
        Productos Destacados
      </h1>
      <div className={styles.contenedorcards}>

    
      <div className={styles.container2}>
        <Image
          style={{ borderRadius: "15px" }}
          width={200}
          height={200}
          alt='malla acero inoxidable'
          src={"/aceroinoxidable.jpg"}
        />
        <div className={styles.textos}>
          <h1 className='mobile:text-lg mobile:text-gray-600 mobile:font-semibold'>
            Mallas de acero inoxidable
          </h1>
          <p className='mobile:text-gray-400'>
            Confeccionadas con distintas medidas de alambre y aberturas de
            entretramado, si no encontras lo que buscas, consultanos, fabricamos
            a medidas
          </p>
        </div>
        {/* Botón de descarga */}
        <a
          href='/inoxidable.pdf' // Reemplaza con la ruta correcta a tu archivo PDF
          download='Catalogo_Mallas_Acero_Inoxidable' // Nombre del archivo que se descargará
          className='mt-5 inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300'
        >
          Descargar Catálogo
        </a>
      </div>
      <div className={styles.container2}>
        <Image
          style={{ borderRadius: "15px" }}
          width={200}
          height={200}
          alt='mallas de hierro galvanizado'
          src={"/galvanizado.jpg"}
        />
        <div className={styles.textos}>
          <h1 className='mobile:text-lg mobile:text-gray-600 mobile:font-semibold'>
            Mallas de hierro galvanizado
          </h1>
          <p className='mobile:text-gray-400'>
            Confeccionadas con distintas medidas de alambre y aberturas de
            entretramado, si no encontras lo que buscas, consultanos, fabricamos
            a medidas
          </p>
        </div>
        {/* Botón de descarga */}
        <a
          href='/galvanizadas.pdf' //ruta correcta archivo PDF
          download='Catalogo_Mallas_Acero_Inoxidable' // Nombre del archivo que se descargará
          className='mt-5 inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300'
        >
          Descargar Catálogo
        </a>
      </div>
      <div className={styles.container2}>
        <Image
          style={{ borderRadius: "15px" }}
          width={200}
          height={200}
          alt='zarandas'
          src={"/aceroinoxidable.jpg"}
        />
        <div className={styles.textos}>
          <h1 className='mobile:text-lg mobile:text-gray-600 mobile:font-semibold'>
            Zarandas
          </h1>
          <p className='mobile:text-gray-400'>
            Confeccionadas con distintas medidas de alambre y aberturas de
            entretramado, si no encontras lo que buscas, consultanos, fabricamos
            a medidas
          </p>
        </div>
        {/* Botón de descarga */}
        <a
          href='/zarandas.pdf' // Reemplaza con la ruta correcta a tu archivo PDF
          download='Catalogo_Mallas_Acero_Inoxidable' // Nombre del archivo que se descargará
          className='mt-5 inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300'
        >
          Descargar Catálogo
        </a>
      </div>
      </div>
    </div>
  );
};

export default Cards;
