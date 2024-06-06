function generatePDF() {
    
    const { jsPDF } = window.jspdf;

    html2canvas(document.querySelector("#contenedor")).then(canvas => {
        
        let pdf = new jsPDF('p', 'mm', 'a4');
        let imgData = canvas.toDataURL('image/png');
        let imgWidth = 215;
        let pageHeight = 280;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
        }

        pdf.save('CV_Javier Jesus Mamani Bautista.pdf');
    });
}