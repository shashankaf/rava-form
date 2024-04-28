import React from "react";
import Instruction from "./Instruction";

const Instructions = () => {
  return (
    <div className="">
      <h2 className="text-xl font-bold text-center">خوێندکاری بەڕێز</h2>
      <Instruction
        text="پێویستە خوێندکار پابەندبێت بەکاتی وانەکان و نابێت دوابکەوێت. بەپێچەوانەوە ئەگەر خوێندکار
)٥ رۆژ( غائب بێت لەخولەکە بێبەش دەبێت."
      />
      <Instruction text="جگەرە کێشان لەناو بیناو دەرەوەی بینای پەیمانگا بەهەموو شێوەیەک قەدەغەیە." />
      <Instruction text="پێویستە خوێندکار پابەندبێت بەپاک و خاوێنی و پاک راگرتنی ژینگەی پەیمانگا." />
      <Instruction text="پاش پڕکردنەوەی ئەم فۆرمە بڕی وەرگیراو ناگەرێتەوە بۆ خوێندکار" />
    </div>
  );
};

export default Instructions;
