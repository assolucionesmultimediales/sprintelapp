

const NavBar = () => {
  return (
    <div className=" mobile:pt-5 mobile:pb-5 mobile:flex mobile:gap-20 desktop:pt-8 desktop:pb-8 desktop:w-4/5 desktop:items-center justify-center desktop:gap-96">
      <h1 className="mobile:text-2xl mobile:font-bold desktop:text-5xl desktop:ml-60 desktop:mr-20">
        Sprintel S.A
      </h1>
      <nav className="mobile:mt-1 desktop:mt-5">
        <ul className="mobile:flex gap-3">
          <li>
            <a>Contacto</a>
          </li>
          <li>
            <a>Productos</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar