import html2pdf from "html2pdf.js/dist/html2pdf.min";
import ReactDOMServer from "react-dom/server";
import Image from "next/image";
import FormTable from "./FormTable";

function FormPDF() {
  const pdfJSX = () => {
    return (
      <div className="p-4">
        <div className="flex flex-row justify-around">
          <Image src="/krg.png" height={200} width={200} alt="KRG Logo" />
          <Image
            src="/rava.png"
            height={200}
            width={200}
            alt="Rava Institute Logo"
          />
        </div>
        <div className="flex flex-col items-center my-6">
          <h1 className="text-2xl font-bold">
            حکومەتی هەرێمی کوردستان - وەزارەتی پەروەردە
          </h1>
          <h2 className="text-xl">بەڕێوەبەرایەتی گشتی پەروەردەی سلێمانی</h2>
          <h2 className="text-xl">بەڕێوەبەرایەتی گشتی پەروەردەی سلێمانی</h2>
          <h2 className="text-xl font-bold">پەیمانگای راڤە</h2>
        </div>
        <div className="flex flex-row justify-between">
          <p>بەروار - </p>
          <p>ژمارە - </p>
        </div>
        <div>
          <h1 className="font-black text-2xl text-center">فۆرمی بەشداریکردنی پۆلی ١٢</h1>
        </div>
        <div>
          <FormTable />
        </div>
      </div>
    );
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(pdfJSX());
    // const printElement = pdfJSX();

    html2pdf().from(printElement).save();
  };

  return (
    <div className="App">
      <button onClick={printHandler}>Print</button>
    </div>
  );
}

export default FormPDF;
