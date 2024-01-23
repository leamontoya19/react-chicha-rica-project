import React from 'react';
import DiceFace from './DiceFace';  // Ajusta la ruta según tu estructura de archivos

const DiceRoller = () => {
  return (
    <div className="m3_dice_section">
      <div className="pr_section">
        <div className="dice_items">
          <DiceFace
            imageUrl="/_next/image?url=..."
            title="Hince an annual OOH Campaign"
            number={23}
          />
          <DiceFace
            imageUrl="/_next/image?url=..."
            title="TAMBURINS 2023 OOH Campaign"
            number={23}
          />
          {/* Agrega más instancias de DiceFace según sea necesario */}
        </div>
        <div className="pr_desc">
          {/* Descripción del proyecto */}
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
