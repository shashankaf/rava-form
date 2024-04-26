import React from "react";

function Button({ text, handleClick }) {
  return (
    <button
      onClick={handleClick}
      class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800 text-white rounded-md outline-none"
    >
      {text}
    </button>
  );
}

export default Button;
