
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashdoard";
import Almacen from "./scenes/Almacen";

import UpdateProducto from "./scenes/Almacen/Edith";
import AgregarProducto from "./scenes/Almacen/agregar";
import Indexlogin from "./scenes/login";
import IndexSesion from "./scenes/login/login";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const[productoSeleccionado, setProductoSeleccionado]=useState({});

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión exitoso
    setIsLoggedIn(true);
    
  };

  const handleLogout = () => {
    // Lógica para manejar el cierre de sesión
    setIsLoggedIn(false);
   
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Box display="flex" height="100vh">
        {isLoggedIn && <Sidebar />} {/* Mostrar Sidebar solo si está logueado */}
        {/*  <Sidebar />*/}
          <Box flex="1" overflow="auto">
          <div className="app">
              
          <main className="content">
          {isLoggedIn && <Topbar 
                 
                  handleLogout={handleLogout} />}
           
            <Routes>
               {/* Ruta de inicio de sesión */}
               <Route
                    path="/login"
                    element={
                      isLoggedIn ? (
                        <Navigate to="/" />
                      ) : (
                        <IndexSesion onLogin={handleLogin} />
                      )
                    }
                  />
                   {/* Ruta del Dashboard */}
                   <Route
                    path="/"
                    element={
                      isLoggedIn ? (
                        <Dashboard />
                      ) : (
                        <Navigate to="/login" />
                      )
                    }
                  />
             
              <Route path="/Almacen" element={ isLoggedIn ? (<Almacen setProductoSeleccionado={setProductoSeleccionado} />  ) : (<Navigate to="/login" /> )}/>
              <Route path="/AgregarProducto" element={isLoggedIn ? ( <AgregarProducto/>) : (<Navigate to="/login" /> )} />
              
              <Route path="/UpdateProducto" element={isLoggedIn ? (<UpdateProducto productoSeleccionado={productoSeleccionado}/>) : (<Navigate to="/login" /> )}/>
              
              <Route path="/RegistroUsuario" element={<Indexlogin/>}/>
              <Route path="/login" element={<IndexSesion/>}/>
              

        
            </Routes>
          </main>
        </div>
        </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
