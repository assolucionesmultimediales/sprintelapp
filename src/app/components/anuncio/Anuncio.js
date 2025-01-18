import styles from "./anuncio.module.css"
import Image from "next/image"

const Anuncio = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="mobile:text-2xl mobile:text-center text-white mobile:font-semibold mobile:mt-14 desktop:mt-16 desktop:text-3xl">Hacemos envios a todo el pais</h1>
      </div>
      <div className="mobile:ml-4 desktop:ml-0">
        <Image
        width={300}
        height={300}
        alt="envios"
        src={"/envio.png"}/>
      </div>
    </div>
  )
}

export default Anuncio