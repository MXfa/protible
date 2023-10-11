import {
  Box,
  Button,
  TextField,
  useTheme,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { styled } from "@mui/system";
import Cmpfechaedith from "../../components/cmpfechaedith";
import React, { useEffect, useState } from "react";
import { categorias } from "../../data/datagames";
import { estatus_prd } from "../../data/datagames";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useFormikContext } from "formik";

const checkoutValues = Yup.object({
  nombre: Yup.string().required("Nombre es requerido"),
  descripcion: Yup.string().required("Descripción es requerida"),
  categoria: Yup.string().required("Categoría es requerida"),
  estatus: Yup.string().required("Estatus es requerido"),
  precio: Yup.number()
    .typeError("El precio debe ser un número")
    .required("Precio es requerido"),
  stock: Yup.number()
    .typeError("El stock debe ser un número")
    .required("Stock es requerido"),

  imagen: Yup.mixed().test("file-required", "Imagen es requerida", (value) => {
    return !!value; // La validación verifica si hay una imagen cargada.
  }),
});

const UpdateProducto = ({ productoSeleccionado }) => {
  const theme = useTheme();
  const inputLabelColor = theme.palette.mode === "dark" ? "#ffffff" : "#000000";
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(productoSeleccionado.imagenp);
  const [guardado, setGuardado] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [imagen, setImagen] = useState(productoSeleccionado?.imagen || null);
  // Manejar la imagen con un estado

  const initialValues = {
    nombre: productoSeleccionado.nombre || "",
    descripcion: productoSeleccionado.descripcion || "",
    categoria: productoSeleccionado.categoria || "",
    estatus: productoSeleccionado.estatus || "",
    precio: productoSeleccionado.precio || "",
    stock: productoSeleccionado.stock || "",
    imagenp: productoSeleccionado.imagenp ||"",
  };

  const checkoutValues = Yup.object({
    nombre: Yup.string().required("Nombre es requerido"),
    descripcion: Yup.string().required("Descripción es requerida"),
    categoria: Yup.string().required("Categoría es requerida"),
    estatus: Yup.string().required("Estatus es requerido"),
    precio: Yup.number()
      .typeError("El precio debe ser un número")
      .required("Precio es requerido"),
    stock: Yup.number()
      .typeError("El stock debe ser un número")
      .required("Stock es requerido"),
   
  });

  const handleImageChange = (e) => {
    // Al seleccionar una imagen, actualiza el valor en el estado
    const selectedImage = e.target.files[0];
   
    setImagen(URL.createObjectURL(selectedImage)); // Establece la URL de la imagen seleccionada
    setFieldValue("imagenp",imagen);
   
  }

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    status,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: checkoutValues,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      setShowAlert(true);

      setTimeout(() => {
        setSubmitting(false);
        setShowAlert(false);
        setIsSubmitted(true);
        resetForm();

        navigate("/Almacen");
      }, 2000);
    },
  });

  const background = theme.palette.mode === "dark" ? "#101524" : "#c8cbfd";

  const handleCancel = () => {
    setGuardado(true);
    navigate("/Almacen");
  };
  
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
            />
            <br></br>
            <br></br>
            <FormControl fullWidth variant="filled">
              <InputLabel id="categoria-label">Categoría</InputLabel>
              <Select
                labelId="categoria-label"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
              >
                {categorias.map((categoria) => (
                  <MenuItem key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth variant="filled">
              <InputLabel id="estatus-label">Estatus</InputLabel>
              <Select
                labelId="estatus-label"
                name="estatus"
                value={values.estatus}
                onChange={handleChange}
              >
               {estatus_prd.map((prd) => (
                  <MenuItem key={prd.id} value={prd.id}>
                    {prd.nombre}
                  </MenuItem>
                ))}
              </Select>
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
              onBlur={handleBlur}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Stock"
              name="stock"
              
              onChange={handleChange}
              onBlur={handleBlur}
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
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#ee7e4c",
                    width: "19rem",
                    borderRadius: "15px",
                    marginTop: "20px",
                  }}
                  variant="contained"
                >
                  Guardar
                </Button>
                &nbsp;&nbsp;
                <Link to="/Almacen">
                  <Button
                    sx={{
                      backgroundColor: "#EE4C6B",
                      width: "9rem",
                      borderRadius: "15px",
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

export default UpdateProducto;
