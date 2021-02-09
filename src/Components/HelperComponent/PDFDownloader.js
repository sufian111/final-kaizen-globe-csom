export default class PDFDownloader {
  static download(contentDiv, filename) {
    const height = 7000;
    const width = 720;
    const orientation = height < width ? "landscape" : "portrait";

    var doc = new window.jsPDF({
      orientation: orientation,
      unit: "px",
      format: [width, height],
      scale: 1,
    });

    doc.addHTML(contentDiv, function () {
      doc.save(filename);
    });
  }
}
