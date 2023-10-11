import React from 'react';

const TextoCarta = ({ textoBase, folio }) => {
  const textoCarta = `Estimado colaborador ${textoBase}, has sido promovido para ocupar la vacante de (valor del select asignacion) en la empresa (valor del selec empresa) del sector (valor del sector) iniciando (valor indicado en el componente fecha inicial) te debes presentar el (valor del componente fecha_entrega) tu número de folio es: ${folio}.`;

  return (
    <div>
      <textarea
        value={textoCarta}
        rows={10}
        cols={50}
        readOnly
        style={{ resize: 'none' }}
      />
    </div>
  );
};

export default TextoCarta;
