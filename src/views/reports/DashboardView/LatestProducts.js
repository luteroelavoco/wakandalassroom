import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
  colors
} from '@material-ui/core';
const state = {
  labels: ['Janeiro', 'Fevereiro', 'Março',
           'Abril', 'Maio' , "Junho", "Julho" , "Agosto" , "Setembro", "Outubro","Novembro","Dezembro"],
  datasets: [
    {
      label: 'Vísitas',
      backgroundColor: colors.indigo[500],
      borderColor: colors.grey[200],
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,100,123,145,1202,102,240,40]
    }
  ]
}
 class LatestProducts extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Total de visitas por mês',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

export default LatestProducts;
