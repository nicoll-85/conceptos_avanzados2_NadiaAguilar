import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import TextWithColor from "./TextWithColor";

const ColorPickerContainer = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleColorChange = (color) => {
    console.log(color);
    setSelectedColor(color);
  };

  return (
    <div>
      <ColorPicker
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
      <TextWithColor selectedColor={selectedColor}></TextWithColor>
    </div>
  );
};

export default ColorPickerContainer;
