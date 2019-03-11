import React, { Component } from 'react';

const CalcBMI = (props) => {
  let BMIindex = (props.weight / (props.height ** 2) * 10000).toFixed(2);

  function BMIstatus(BMIindex) {
    return (
      BMIindex <=18.5 ? "Undreweight"   :
      BMIindex <=24.9 ? "Normal Weight" :
      BMIindex <=29.9 ? "OverWeight"    :
                        "Obese"
    )
  }

  return (
    <div>
      BMI: <strong>{BMIindex} {" "} {BMIstatus(BMIindex)}</strong>
    </div>
  );
}

export default CalcBMI;


// function tellBMI(bmi) {
//   return bmi <= 18.5 ? "Underweight"   :
//          bmi <= 24.9 ? "Normal Weight" :
//          bmi <= 29.9 ? "Overweight"    :
//                        "Obese"
// }