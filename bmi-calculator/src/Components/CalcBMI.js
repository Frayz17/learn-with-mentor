import React, { Component } from 'react';

const CalcBMI = (props) => {
  let BMIindex = (props.weight / (props.height ** 2) * 10000).toFixed(2);

  return (
    <div>
      {BMIindex}
    </div>
  );
}

export default CalcBMI; 