
import './stylesheader.css'
const Header = () => {
  return (
    <nav class='nav-main' >
      <ul class="nav-menu show">
        <li>
          <a href="">Buscar</a>
        </li>
        <li>
          <a href="">Libros</a>
        </li>
        <li>
          <a href="">Audiolibros</a>
        </li>

        <li>
          <a href="">Cómics</a>
        </li>

        <li>
          <a href="">Estanterías</a>
        </li>
        <li className='align-sign'>
        <a href="">Comprar Suscripción</a>
        </li>
        <li>
        <a href="">Iniciciar Sesión</a>
        </li>
      </ul>
      
    </nav>
  );
}

export default Header