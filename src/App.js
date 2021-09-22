import logo from './media/logo.png';
import './App.css';



function App() {
  return (
    <div className = "App" >
    <body>
          <header>
              <ul class = "navbar">
                  <li>
                      <img src={logo}alt="imagen" class="logo" />  
                  </li>
                  <li>
                      <div class="buscar">
                          <input placeholder="  Buscar Producto" />
                        </div>
                        <i class="fas fa-search botonGenerico iconoBusqueda"></i>
                  </li>
              </ul>
          </header>
          <main>
          <h1 className = "text-3xl mt-20 font-bold text-red-500">
            Pagina de ventas
          </h1>
          </main>
          <footer>

        </footer>
    </body>
    </div>
    
  );
}

export default App;
