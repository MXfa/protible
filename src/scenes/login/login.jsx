import React from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const IndexSesion = ({onLogin}) => {
  const navigate = useNavigate();
  
  const validacionFormulario = Yup.object({
   
    mail: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("Ingrese su correo electrónico"),
    pass: Yup.string()
      .required("Ingrese una contraseña")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&)"
      ),
    
  });

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
       
        mail: "",
        pass: "",
       
      },
      validationSchema: validacionFormulario,
      onSubmit: (values) => {
        if (values.mail === "hola@hola.com" && values.pass === "12345678Aa@") {
          onLogin ();
           // Cambia "/dashboard" por la ruta real del dashboard
        } else {
          console.log("Credenciales incorrectas");
        }
      },
    });

  return (
    <Box m="20px" display="flex" justifyContent="center">
      <br></br>
      <br></br>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          background: "#00121E",
          borderRadius: "20px",
          p: 3,
          width: "50%", // Ancho del formulario
        }}
      >
  
          <Grid item xs={12} sm={6} style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
            <Box display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="10vh"
      >
              <SportsEsportsIcon  style={{ fontSize: "70px" }}/>
              <Typography variant="h3">Inicio de sesión</Typography>
            </Box>
            <br></br>
            <br></br>
             
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Ingresa tu e-mail"
                  color="info" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mail}
                name="mail"
                error={!!touched.mail && !!errors.mail}
                helperText={touched.mail && errors.mail}
                autoComplete="off"
                sx={{
                  backgroundColor: "#082336",
                  marginX: "auto", // Centrar horizontalmente
                  width: "100%", // Ancho al 100%
                  borderRadius: "19px",
                  "& label": {
                    color: "#3E99D2", // Color del label
                    fontFamily: "Roboto", // Fuente
                  },
                }}
              />
             
              <br></br>
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Ingresa tu password"
                  color="info" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pass}
                name="pass"
                error={!!touched.pass && !!errors.pass}
                helperText={touched.pass && errors.pass}
                autoComplete="off"
                sx={{
                  backgroundColor: "#082336",
                  marginX: "auto", // Centrar horizontalmente
                  width: "100%", // Ancho al 100%
                  borderRadius: "19px",
                  "& label": {
                    color: "#3E99D2", // Color del label
                    fontFamily: "Roboto", // Fuente
                  },
                }}
              />
              <br></br>
            
              
            {/* Otros campos de texto con ajustes similares */}
          </Grid>
          {/* Otras columnas del formulario */}
       
          <Grid container>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
    <Link to="/RegistroUsuario">

      <Typography variant="h5" sx={{ textAlign: "right" }}>
       ¿Aun sin cuenta? Regístrate Aquí
       </Typography>
    </Link>
  </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#3DE6AF",
            width: "100%", // Ancho del botón al 100%
            borderRadius: "15px",
            marginTop: "20px", // Espacio superior
            height:"7vh",
          }}
        >
          Acceder
        </Button>


        
</Grid>
      </Box>
    </Box>
  );
};

export default IndexSesion;
