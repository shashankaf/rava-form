import Image from "next/image";
import FormTable from "./FormTable";
import Instructions from "./Instructions";
import ReactDOMServer from "react-dom/server";
import Signatures from "./Signatures";


function FormPDF({student, teachers}) {
  const pdfJSX = () => {
    return (
      <div  className="p-4">
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
          <h1  className="text-2xl font-bold">
            حکومەتی هەرێمی کوردستان - وەزارەتی پەروەردە
          </h1>
          <h2  className="text-xl">بەڕێوەبەرایەتی گشتی پەروەردەی سلێمانی</h2>
          <h2  className="text-xl">بەڕێوەبەرایەتی گشتی پەروەردەی سلێمانی</h2>
          <h2  className="text-xl font-bold">پەیمانگای راڤە</h2>
        </div>
        <div className="flex flex-row justify-between w-2/3 m-auto">
          <p >بەروار - </p>
          <p >ژمارە - </p>
        </div>
        <div>
          <h1  className="font-black text-2xl text-center">فۆرمی بەشداریکردنی پۆلی ١٢</h1>
        </div>
        <div>
          <FormTable student={student} teachers={teachers} />
        </div>
        <Instructions />
        <div>
          <Signatures />
        </div>
      </div>
    );
  };

  const printHandler = async () => {
    const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default;
    const printContent = ReactDOMServer.renderToString(pdfJSX());
    html2pdf().set().from(printContent).save();
  };

  return (
    <div className="flex justify-center lg:w-2/3 sm:w-full m-auto items-center my-4 px-10 py-16 shadow-md rounded-md border-gray-100 border-1">
      <button className="bg-indigo-500 hover:bg-indigo-800 transition-300 text-white px-6 py-2 rounded-md" onClick={printHandler}>خەزنکردنی فۆرم</button>
    </div>
  );
}

export default FormPDF;
