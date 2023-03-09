import React from 'react';
import html2canvas from 'html2canvas';

export default function ExportAsCanvas(props) {
  const { id, filename } = props;

  const handleExport = () => {
    const element = document.getElementById(id);

    html2canvas(element)
      .then((canvas) => {
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
  };

  return (
    <button onClick={handleExport}>Export as image</button>
  );
}
