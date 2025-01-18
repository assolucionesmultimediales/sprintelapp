import Image from "next/image"
import styles from "./ubicacion.module.css"

const Ubicacion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contenedorimg}>
        <div className={styles.imgn}>
        <Image
        width={250}
        height={250}
        alt="ubicacion"
        src={"/ubicacion.png"}/>
        </div>
        <h1 className="mobile:text-2xl mobile:text-gray-500 mobile:font-semibold desktop:mt-16">Estamos En Villa Pueyrredon</h1>
      </div>
      <div>
      <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.284808832486!2d-58.503939524981486!3d-34.588364759052816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6e7749d4cc7%3A0x8f583e9c707f18f3!2sGabriela%20Mistral%202162%2C%20C1419HPO%20CABA%2C%20Argentina!5e0!3m2!1ses!2s!4v1697630300213!5m2!1ses!2s'
          width='400'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  )
}

export default Ubicacion