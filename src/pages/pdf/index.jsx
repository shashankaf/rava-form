import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("../../components/FormPDF"), {
  ssr: false,
});

const PDFView = () => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return <Form />;
};

export default PDFView;
