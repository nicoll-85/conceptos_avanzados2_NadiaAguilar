import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ selectedColor, onColorChange }) => {
  return (
    <div>
      <HexColorPicker
        color={selectedColor}
        onChange={(color) => onColorChange(color)}
      />
    </div>
  );
};

// const ColorPicker = () => {
//   const [color, setSelectedColor] = useState("#aabbcc");
//   return <HexColorPicker color={color} onChange={setColor} />;
// };

export default ColorPicker;
