import './footerstyle.css'

const Footer = () => {
  return (
   <footer>
    <div className='data-contact'>
        <ul>
            <li><a href="#"> Acerca de Nosotros</a></li>
            <li><a href="#">Bilbioteca</a> </li>
            <li><a href="#">Suscripcion</a> </li>
            <li><a href="#">Contacto</a> </li>
            <li><a href="#">Trabaja con nosotros</a> </li>
            <li><a href="#">Soporte</a> </li>
        </ul>

      
    </div>

    <p className='date-book'>
    © 2007–2022, Bookmate
    </p>
   </footer>
  )
}

export default Footer