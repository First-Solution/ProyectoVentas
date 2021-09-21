import logo from './media/logo.png';
import './App.css';



function App() {
  return (
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

      </main>
      <footer>

    </footer>
    </body>
  );
}

export default App;
