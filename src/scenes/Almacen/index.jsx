import {
  Box,
  Boton,
  TextField,
  Typography,
  useTheme,
  Tooltip,
  Grid,
} from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { productos_dg } from "../../data/datagames";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { estatus_prd } from "../../data/datagames";
import { useState, useEffect } from "react";
import {
  ContactPhone,
  ContactPhoneSharp,
  Mail,
  Phone,
  Visibility,
} from "@mui/icons-material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Almacen = ({ setProductoSeleccionado }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);
  const [filaSeleccionada, setFilaSeleccionada] = useState({});
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [opcionFiltro, setOpcionFiltro] = React.useState("");

  const handleChange = (event) => {
    setOpcionFiltro(event.target.value);
  };

  const handleEditClick = (e) => {
    setProductoSeleccionado(e.row);
    console.log(e);
  };

  useEffect(() => {
    setRows(
      productos_dg.map((Productos) => ({
        Id: Productos.id,
        Nombre: Productos.nombre,
        Descripcion: Productos.descripcion,
        Categoria: Productos.categoria,
        Precio: Productos.precio,
        Stock: Productos.stock,
        Estatus: Productos.estatus,
      }))
    );
  }, []);

  const encabezadosgrid = {
    fontSize: "17px",
    fontWeight: "bold",
    color: theme.palette.mode === "light" ? "#141414" : null,
  };
  const filasgrid = {
    fontSize: "1.5rem",
  };

  const botonesGrid = () => {
    return theme.palette.primary.main === "light" ? "#ee7e4c" : "#ee7e4c";
  };

  const columns = [
    //nombre
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 0.6,
      renderHeader: () => (
        <Typography style={encabezadosgrid}>NOMBRE</Typography>
      ),
    },
    //contacto
    {
      field: "descripcion",
      headerName: "Descripcion",
      flex: 0.7,
      headerAlign: "center",
      align: "left",
      renderHeader: () => (
        <Typography style={encabezadosgrid}>Descripción</Typography>
      ),
    },
    //mail
    {
      field: "categoria",
      headerName: "Categoria",
      flex: 0.3,
      headerAlign: "center",
      align: "center",
      renderHeader: () => (
        <Typography style={encabezadosgrid}>Categoria</Typography>
      ),
    },
    //estatus
    {
      field: "precio",
      headerName: "Precio",
      headerAlign: "center",
      align: "center",
      flex: 0.2,

      renderHeader: () => (
        <Typography style={encabezadosgrid}>Precio</Typography>
      ),
    },
    //stock
    {
      field: "stock",
      headerName: "Stock",
      align: "center",
      headerAlign: "center",
      flex: 0.2,
      renderHeader: () => (
        <Typography style={encabezadosgrid}>Stock</Typography>
      ),
    },

    //status
    {
      field: "estatus",
      headerName: "Estatus",
      align: "center",
      headerAlign: "center",
      flex: 0.2,
      renderHeader: () => (
        <Typography style={encabezadosgrid}>Status</Typography>
      ),
    },
    //aciones
    {
      field: "access",
      headerName: "Access",
      flex: 0.5,
      renderCell: ({ row }) => {
        return (
          <Stack spacing={0.1} direction="row">
            <Stack>
              <Tooltip
                id="wew-ds"
                title={
                  <Typography style={{ color: "#fffff" }}>Editar</Typography>
                }
                placement="right"
              >
                <Link to="/UpdateProducto">
                  <Button
                    variant="text"
                    size="small"
                    style={{ color: botonesGrid() }}
                  >
                    <EditNoteIcon />
                  </Button>
                </Link>
              </Tooltip>
            </Stack>

            <Stack>
              <Tooltip
                id="wew-dss "
                title={
                  <Typography style={{ color: "#fffff" }}>Eliminar</Typography>
                }
                placement="right"
              >
                <Button
                  varian="text"
                  size="small"
                  style={{ color: botonesGrid() }}
                >
                  <DeleteSweepIcon />
                </Button>

                {/**     <ModalDialog filaSeleccionada={filaSeleccionada}/> */}
              </Tooltip>
            </Stack>
          </Stack>
        );
      },
      renderHeader: () => (
        <Typography style={encabezadosgrid}>ACCIONES</Typography>
      ),
    },
  ];
  //const background = theme.palette.mode === "dark" ? "#101524" : "#f3f6fa";

  return (
    <Box m="20px">
      <Header title="Almacén" subtitle="Registro de productos" />

      <Box
        m="4px 0 0 0"
        height="58vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            justifyContent: "center", // Centrar los encabezados de las columna
            alignItems: "center",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
            overflow: "auto",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item style={{ width: "50vh" }}>
            {/* Columna Izquierda */}
            <FormControl fullWidth variant="standard">
              <InputLabel id="estatus-label">Opcion de busqueda</InputLabel>
              <Select
                labelId="estatus-label"
                name="estatus"
                value={opcionFiltro}
                onChange={handleChange}
              >
                {estatus_prd.map((prd) => (
                  <MenuItem key={prd.id} value={prd.id}>
                    {prd.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {/* Columna Derecha */}

            <Link to="/AgregarProducto">
              <Button
                sx={{
                  backgroundColor: "#ee7e4c",
                  "&:hover": {
                    backgroundColor: "#ee7e4c",
                  },
                  width: "11rem",
                  height: "3rem",
                  borderRadius: "2rem",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                Agregar
              </Button>
            </Link>
          </Grid>
        </Grid>

        <br></br>

        <DataGrid
          onCellClick={handleEditClick}
          rows={productos_dg}
          columns={columns}
        />
      </Box>
    </Box>
  );
};
export default Almacen;


