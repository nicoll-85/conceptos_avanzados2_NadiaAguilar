import React from "react";

const TextWithColor = ({ selectedColor }) => {
  return (
    <div style={{ color: selectedColor }}>
      <p>Ejemplo de texto que cambia de color según el color seleccionado.</p>
    </div>
  );
};
export default TextWithColor;
