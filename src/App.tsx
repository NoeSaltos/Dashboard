// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Grid from '@mui/material/Grid2'
import IndicatorWeather from './components/IndicatorWeather';
import TableWeather from './components/TableWeather';
import ControlWeather from './components/ControlWeather';

function App() {



return (
        <Grid container spacing={5}>
          {/* Indicadores */}
          <Grid size={{xs: 12,xl:3}}><IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"} /></Grid>
          <Grid size={{xs: 12,xl:3}}><IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"} /></Grid>
          <Grid size={{xs: 12,xl:3}}><IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"} /></Grid>
          <Grid size={{xs: 12,xl:3}}><IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"} /></Grid>
         
          {/* Tabla */}
          <Grid size={{xs: 12,xl:8}}>Elemento: Tabla</Grid>
         
          {/* Gráfico */}
          <Grid size={{xs: 12,xl:4}}>Elemento: Gráfico 1</Grid>
     
      {/* Grid Anidado */}
      <Grid container spacing={2}>
                     <Grid size={{ xs: 12, xl: 3 }}>
                         <ControlWeather/>
                     </Grid>
                     <Grid size={{ xs: 12, xl: 9 }}>
                         <TableWeather/>
                     </Grid>
                 </Grid>

      </Grid>
    )
}

export default App
