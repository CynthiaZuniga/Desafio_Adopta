import './App.css'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './MyCard';
import Footer from './Footer';



function App() {
    return (
   <>
    <Header></Header>
    <div className='edicion'>
    <MyCard
    Imagen="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    Titulo="Chamullo"
    descripcion="Un loquillo. Alegrará tus días con esa carita tan tierna"
    bg="success"
    textoBoton="Mestizo Pug"
    />

<MyCard
    Imagen="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    Titulo="Washington"
    descripcion="Condorito estaría orgulloso"
    bg="danger"
    textoBoton="Chilean Terrier"
    />

<MyCard
    Imagen="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    Titulo="Mente en Blanco"
    descripcion="No es muy bueno atrapando cosas, pero tiene un corazon de oro"
    bg="warning"
    textoBoton="Mestizo Desconocido"
    />

<MyCard
    Imagen="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    Titulo="Epitafio"
    descripcion="Parece ser pariente de Washington, pero es mas Chileno que los porotos"
    bg="primary"
    textoBoton="Mestizo Terrier Chileno"
    />
    </div>

    <footer>Cada uno de estos perritos ha tenido una vida dificil, sin embargo, tienen mucho amor por entregar. Dales una oportunidad de mejorar sus condiciones. ¡Adopta. No compres!</footer>
    </>
  )
}

export default App
