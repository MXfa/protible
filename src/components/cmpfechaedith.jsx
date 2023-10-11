import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



    const Cmpfechaedith = ({dia, mes, year, setDia, setMes, setYear, error}) => {
    

      const handleDateChange = (event) => {
        const { name, value } = event.target;
        if (name === "dia") {
          setDia(value);
        } else if (name === "mes") {
          setMes(value);
        } else if (name === "year") {
          setYear(value);
        }

      }  
     
   


      
      const generateId = (label) => {
        return `demo-simple-select-filled-label-${label}`;
      };
    
      return (
        <Box m="20px">
           <Typography variant="h6" gutterBottom>
            Fecha fundación
          </Typography>
              
                <FormControl variant="filled" sx={{ m: 1, minWidth: 60 }} error={error}>
                  <InputLabel id={generateId("dia")}>Día</InputLabel>
                  <Select
                    labelId={generateId("dia")}
                    id={generateId("dia")}
                    name="dia"
                    value={dia}
                    onChange={handleDateChange }
                  >
                    <MenuItem value="">
                      <em>Seleccione</em>
                    </MenuItem>
                    {Array.from({ length: 31 }, (_, index) => {
                      const day = index + 1;
                      const formattedDay = day.toString().padStart(2, "0");
                      return (
                        <MenuItem key={formattedDay} value={formattedDay}>
                          {formattedDay}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
    
                <FormControl variant="filled" sx={{ m: 1, minWidth: 80 }} error={error}>
                  <InputLabel id={generateId("mes")}>Mes</InputLabel>
                  <Select
                    labelId={generateId("mes")}
                    id={generateId("mes")}
                    name="mes"
                    value={mes}
                    onChange={handleDateChange}
                  >
                    <MenuItem value=""><em>Seleccione</em></MenuItem>
                    <MenuItem value="01">Enero</MenuItem>
                    <MenuItem value="02">Febrero</MenuItem>
                    <MenuItem value="03">Marzo</MenuItem>
                    <MenuItem value="04">Abril</MenuItem>
                    <MenuItem value="05">Mayo</MenuItem>
                    <MenuItem value="06">Junio</MenuItem>
                    <MenuItem value="07">Julio</MenuItem>
                    <MenuItem value="08">Agosto</MenuItem>
                    <MenuItem value="09">Septiembre</MenuItem>
                    <MenuItem value="10">Octubre</MenuItem>
                    <MenuItem value="11">Noviembre</MenuItem>
                    <MenuItem value="12">Diciembre</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 80 }} error={error}>
                  <InputLabel id={generateId("year")}>Año</InputLabel>
                  <Select
                    labelId={generateId("year")}
                    id={generateId("year")}
                    name="year"
                    value={year}
                    onChange={handleDateChange}
                  >
                    <MenuItem value=""><em>Seleccione</em></MenuItem>
                    {Array.from(
                      { length: new Date().getFullYear() - 1940 + 1 },
                      (_, index) => {
                        const year = 1940 + index;
                        return (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>
         
       
        </Box>
      );
    };
    
    export default Cmpfechaedith;
    