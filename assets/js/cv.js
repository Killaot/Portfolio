function downloadPDF() {
    var link = document.createElement('a');
    link.href = '../CV-KILLIAN-LAOT.pdf';
    link.download = 'CV-KILLIAN-LAOT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }