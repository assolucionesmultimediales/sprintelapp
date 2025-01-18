import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className='flex gap-10 mobile:grid-flow-col justify-center'>
        <a
          href='https://www.facebook.com/profile.php?id=61556220640358&locale=es_LA'
          className="relative after:content-[''] after:block after:h-8 after:w-0.5 after:bg-white after:absolute after:right-[-20px] after:top-1/2 after:transform after:-translate-y-1/2"
        >
          <Image width={30} height={30} alt='facebook' src={"/facebook.png"} />
        </a>

        <a
          href='https://www.instagram.com/telasmetalicas.sprintel/'
          className="relative after:content-[''] after:block after:h-8 after:w-0.5 after:bg-white after:absolute after:right-[-20px] after:top-1/2 after:transform after:-translate-y-1/2"
        >
          <Image
            width={30}
            height={30}
            alt='instagram'
            src={"/instagram.png"}
          />
        </a>

        <a href='https://www.linkedin.com/feed/?trk=onboarding-landing'>
          <Image width={30} height={30} alt='linkedin' src={"/linkedin.png"} />
        </a>
      </div>
      <div className='mt-6'>
        <p className='text-white'>
          Contacto:informes@sprintel.com.ar / Tel: +54 9 11 7000 7600
        </p>
      </div>
    </div>
  );
};

export default Footer;
