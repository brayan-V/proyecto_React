import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, BarElement, LineController } from 'chart.js';

// Registrar componentes necesarios para Chart.js
Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, BarElement, LineController);

// Datos para las visitas mensuales
const visitasMensualesData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'Visitas a la Página',
      data: [1500, 1800, 2000, 2200, 2500, 2700, 3000, 3200, 3500, 4000, 4200, 4500],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 3,
    },
  ],
};

// Configuración del gráfico de visitas
const visitasMensualesOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Visitas Mensuales a la Página' },
  },
  scales: {
    y: { beginAtZero: true, title: { display: true, text: 'Número de Visitas' } },
    x: { title: { display: true, text: 'Meses' } },
  },
};

// Datos para ventas y devoluciones
const ventasDevolucionesData = {
  labels: ['CPU', 'CASE', 'Tarjetas de Video', 'Diademas', 'Monitores', 'Mouse', 'Teclados'],
  datasets: [
    {
      label: 'Ventas',
      data: [65, 59, 80, 81, 56, 55, 70],
      backgroundColor: 'rgb(25, 139, 2)',
    },
    {
      label: 'Devoluciones',
      data: [28, 48, 40, 19, 50, 27, 15],
      backgroundColor: 'rgb(199, 2, 2)',
    },
  ],
};

// Configuración del gráfico de ventas y devoluciones
const ventasDevolucionesOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Ventas y Devoluciones por Categoría' },
  },
  scales: {
    y: { beginAtZero: true, title: { display: true, text: 'Cantidad' } },
    x: { title: { display: true, text: 'Categorías' } },
  },
};

const SaleChart = () => (
  <div className="saleChartContainer">
    <div className="saleChart">
      <h2>Visitas Mensuales a la Página</h2>
      <Line data={visitasMensualesData} options={visitasMensualesOptions} />
    </div>

    <div className="saleChart">
      <h2>Ventas y Devoluciones por Categoría</h2>
      <Bar data={ventasDevolucionesData} options={ventasDevolucionesOptions} />
    </div>

  </div>
);

export default SaleChart;
