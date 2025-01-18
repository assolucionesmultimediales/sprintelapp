import styles from "./hero.module.css"

const Hero = () => {
  return (
    <div className={styles.container}>
    <div className={styles.container2}>
      <h1 className="mobile:mb-20">Fabricamos e importamos mallas de hierro galvanizado, acero inoxidable, zarandas, discos pacos y más.
        Consultanos
      </h1>
      <a
        href="https://wa.me/5491158099891?text=¡Hola!%20Estoy%20interesado%20en%20mallas%20de%20acero%20inoxidable"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white text-lg font-semibold bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 mobile:pt-5 mobile:pb-5"
      >
        Contáctanos por WhatsApp
      </a>
    </div>
    </div>
  )
}

export default Hero