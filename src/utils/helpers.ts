export const navigateToUrl = (url: string) => {
  window.open(url, '_blank');
};

export const downloadPDF = (pdfBase64: string, nombreArchivo: string) => {
  // Convertir el archivo base64 a un objeto blob
  const byteCharacters = atob(pdfBase64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

  // Crear un objeto URL para el blob
  const url = URL.createObjectURL(pdfBlob);

  // Crear un enlace y simular el clic para descargar el archivo
  const link = document.createElement('a');
  link.href = url;
  link.download = nombreArchivo;
  link.click();

  // Liberar el objeto URL
  URL.revokeObjectURL(url);
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}