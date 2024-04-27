import React from "react";

const FormTable = () => {
  return (
    <>
      <table className="table-auto border border-collapse border-gray-400 my-4 m-auto">
        <tbody>
          <tr className="bg-white text-right">
            <td className="border px-4 py-2">Row Col 1</td>
            <td className="border px-4 py-2">Row Col 2</td>
            <td className="border px-4 py-2">Row Col 3</td>
            <td className="border px-4 py-2">Row Col 4</td>
          </tr>
          <tr className="bg-white text-right">
            <td className="border px-4 py-2">Row Col 1</td>
            <td className="border px-4 py-2">Row Col 2</td>
            <td className="border px-4 py-2">Row Col 3</td>
            <td className="border px-4 py-2">Row Col 55</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FormTable;
