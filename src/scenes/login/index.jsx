import React from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Indexlogin = () => {
  const validacionFormulario = Yup.object({
    nombre: Yup.string().required("Ingrese su nombre(s)"),
    apellidos: Yup.string().required("Ingrese sus apellidos"),
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
    pass2: Yup.string()
      .required("Confirme su contraseña")
      .oneOf([Yup.ref("pass"), null], "Las contraseñas deben coincidir"),
  });

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        nombre: "",
        apellidos: "",
        mail: "",
        pass: "",
        pass2: "",
      },
      validationSchema: validacionFormulario,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <Box m="20px" display="flex" justifyContent="center">
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
              <PersonOutlineIcon  style={{ fontSize: "70px" }}/>
              <Typography variant="h3">Registro de Usuario</Typography>
            </Box>
            <br></br>
            <br></br>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                   color="info" 
                   focused
                  label="Ingrese su nombre(s)"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nombre}
                  name="nombre"
                  error={!!touched.nombre && !!errors.nombre}
                  helperText={touched.nombre && errors.nombre}
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
                type="text"
                label="Ingresa tus apellidos"
                  color="info" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.apellidos}
                name="apellidos"
                error={!!touched.apellidos && !!errors.apellidos}
                helperText={touched.apellidos && errors.apellidos}
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                  color="info" 
                label="Confirma tu password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pass2}
                name="pass2"
                error={!!touched.pass2 && !!errors.pass2}
                helperText={touched.pass2 && errors.pass2}
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
        
            {/* Otros campos de texto con ajustes similares */}
          </Grid>
          {/* Otras columnas del formulario */}
       

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
        <br></br>
        <Link to="/login">
      <Button
        sx={{
          backgroundColor: "#EE4C6B",
          width: "100%", // Ancho del botón al 100%
          borderRadius: "15px",
          marginTop: "20px", // Espacio superior
          height:"7vh",
        }}
        variant="error"
      >
        Cancelar
      </Button>
    </Link>
      </Box>
    </Box>
  );
};

export default Indexlogin;
