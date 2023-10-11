import {
  Box,
  Button,
  TextField,
  useTheme,
  Grid,
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  Alert,
  MenuItem,
} from "@mui/material";
import { formik, useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AgregarProducto = () => {
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);
  const theme = useTheme();
  const [showAlert, setShowAlert] = useState(false);
 
  const [isSubmitted, setIsSubmitted] = useState(false);
  
 
  const handleImageChange = (e) => {
    // Al seleccionar una imagen, actualiza el valor en el estado
    const selectedImage = e.target.files[0];
    var auximpr=URL.createObjectURL(selectedImage);
    setImagen(URL.createObjectURL(selectedImage)); // Establece la URL de la imagen seleccionada
    setFieldValue("imagenp", auximpr);
    console.log(auximpr);
    
  };
 

  const validacionFormulario = Yup.object({
    nombre: Yup.string().required("Nombre es requerido"),
    descripcion: Yup.string().required("Descripción es requerida"),
    categoria: Yup.string().required("Categoría es requerida"),
    estatus: Yup.string().required("Estatus es requerido"),
    precio: Yup.number()
    .typeError("El precio debe ser un número")
    .required("Precio es requerido"),
    stock: Yup.number()
    .typeError("El stock debe ser un número")
    .required("Stock es requerido pro prueba"),
  });



  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    status,
    setFieldValue,
    isSubmitting,
  } = useFormik({
  initialValues : {
  nombre: "",
  descripcion: "",
  categoria: "", 
  estatus: "", 
  precio: "",
  stock: "",
  imagenp:"",
},
    validationSchema: validacionFormulario,
    onSubmit: (objvalores, { resetForm, setSubmitting }) => {
      const dataToSend = {
        ...objvalores,
      
      };

      console.log(dataToSend);
      setSubmitting(true);
      setShowAlert(true);

      setTimeout(() => {
        setIsSubmitted(true);
        setShowAlert(false);

        resetForm();
       
        setSubmitting(false);
      }, 2000);
    },
  });

 
  




  const background = theme.palette.mode === "dark" ? "#101524" : "#c8cbfd";

  return (
    <Box m="20px">
    <Header title="Agregar Producto" subtitle="Información del Producto" />
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ background, borderRadius: "20px", p: 1 }}
    >
      <Grid container spacing={2}>
        {/* Columna Izquierda */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            error={!!touched.nombre && !!errors.nombre}
              helperText={touched.nombre && errors.nombre}
              autoComplete="off"
          />
          <br></br>
          <br></br>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Descripción"
            name="descripcion"
            value={values.descripcion}
            onChange={handleChange}
            error={!!touched.descripcion && !!errors.descripcion}
              helperText={touched.descripcion && errors.descripcion}
              autoComplete="off"
          />
          <br></br>
          <br></br>
          <FormControl fullWidth variant="filled"  error={!!touched.categoria && !!errors.categoria}>
            <InputLabel id="categoria-label">Categoría</InputLabel>
            
            <Select
              labelId="categoria-label"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
            >
              <MenuItem value="opcion1">Opción 1</MenuItem>
              <MenuItem value="opcion2">Opción 2</MenuItem>
              <MenuItem value="opcion3">Opción 3</MenuItem>
            </Select>
            {!!touched.categoria && !!errors.categoria && (
                <FormHelperText>{errors.categoria}</FormHelperText>
              )}
          </FormControl>
          <br></br>
          <br></br>
          <FormControl fullWidth variant="filled" error={!!touched.estatus && !!errors.estatus}>
            <InputLabel id="estatus-label">Estatus</InputLabel>
            <Select
              labelId="estatus-label"
              name="estatus"
              value={values.estatus}
              onChange={handleChange}
            >
              <MenuItem value="estatus1">Disponible</MenuItem>
              <MenuItem value="estatus2">Agotado</MenuItem>
              <MenuItem value="estatus3">Proximamente</MenuItem>
            </Select>
            {!!touched.estatus && !!errors.estatus && (
                <FormHelperText>{errors.estatus}</FormHelperText>
              )}
          </FormControl>
          <br></br>
          <br></br>
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Precio"
            name="precio"
            value={values.precio}
            onChange={handleChange}
            error={!!touched.precio && !!errors.precio}
            helperText={touched.precio && errors.precio}
            autoComplete="off"
          />
          <br></br>
          <br></br>
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Stock"
            name="stock"
            value={values.stock}
            onChange={handleChange}
            error={!!touched.stock && !!errors.stock}
                helperText={touched.stock && errors.stock}
                autoComplete="off"
          />
        </Grid>

        {/* Columna Derecha */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {imagen && (
            <div
              style={{
                width: "250px",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imagen}
                alt="Producto"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange }
            
            style={{
              backgroundImage:
                "linear-gradient(transparent 0%, transparent calc(100% - 28px), #3E99D2, #3E99D2)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
              padding:
                "7px" /* Ajusta el espaciado interior para que coincida con el tamaño del texto "Selecciona archivo" */,
            }}
          />
         
        {/* Columna Izquierda */}
        <Grid item xs={12} sm={6}>
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center" // Centra horizontalmente
    justifyContent="center" // Centra verticalmente
    height="100%" // Establece la altura para que funcione el centrado vertical
  >
        &nbsp;&nbsp;    &nbsp;&nbsp;    &nbsp;&nbsp;
    <Button
     type="submit"
     variant="contained"
      sx={{
        backgroundColor: "#ee7e4c",
        width: "19rem",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    
    >
      Guardar
    </Button>
    &nbsp;&nbsp;
    <Link to="/Almacen">
      <Button
        sx={{
          backgroundColor: "#EE4C6B",
          width: "9rem",
          borderRadius: "20px",
          marginTop: "20px",
        }}
        variant="contained"
      >
        Cancelar
      </Button>
    </Link>
  </Box>
</Grid>
      </Grid>
        </Grid>
    </Box>
    {showAlert && (
      <Alert severity="success" onClose={() => setShowAlert(false)}>
        Producto guardado exitosamente
      </Alert>
    )}
  </Box>
  );
};

export default AgregarProducto;
