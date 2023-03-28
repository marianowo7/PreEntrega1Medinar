import CartWidget from "../CartWidget/CarWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Soluciones y Productos de Informática </h3>
      <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooka</button>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
