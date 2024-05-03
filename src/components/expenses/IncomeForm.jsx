import React, { useState } from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../../pages/fonts/shasenem.ttf'})

const IncomeForm = () => {
  const [income, setIncome] = useState("");
  const [incomeType, setIncomeType] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [discount, setDiscount] = useState("");
  const [remainingAmount, setRemainingAmount] = useState("");

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleIncomeTypeChange = (e) => {
    setIncomeType(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleDiscountTypeChange = (e) => {
    setDiscountType(e.target.value);
  };

  const calculateRemainingAmount = () => {
    let remaining = income;

    if (discountType === "percentage") {
      remaining -= (income * discount) / 100;
    } else if (discountType === "amount") {
      remaining -= discount;
    }

    setRemainingAmount(remaining);
  };

  return (
    <div dir="rtl" className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <label htmlFor="income" className={`${shasenem.className} block mb-2 text-xl`}>
        بڕی داهات
      </label>
      <input
        type="number"
        id="income"
        value={income}
        onChange={handleIncomeChange}
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />

      <label htmlFor="incomeType" className={`${shasenem.className} block mb-2 text-xl`}>
        جۆری داهات
      </label>
      <select
        id="incomeType"
        value={incomeType}
        onChange={handleIncomeTypeChange}
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      >
        <option value="">بژاردەکان</option>
        <option value="full">خولی تەواو</option>
        <option value="weekly">خولی هەفتانە</option>
        <option value="daily">خولی یەک رۆژە</option>
      </select>

      <label htmlFor="discount" className={`${shasenem.className} block mb-2 text-xl`}>
        پشکی مامۆستا
      </label>
      <input
        type="number"
        id="discount"
        value={discount}
        onChange={handleDiscountChange}
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />

      <label htmlFor="discountType" className={`${shasenem.className} block mb-2 text-xl`}>
        جۆری پشک
      </label>
      <select
        id="discountType"
        value={discountType}
        onChange={handleDiscountTypeChange}
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      >
        <option value="">بژاردەکان</option>
        <option value="percentage">رێژی سەدی</option>
        <option value="amount">بڕی پارە</option>
      </select>

      <button
        onClick={calculateRemainingAmount}
        className={`${shasenem.className} bg-blue-500 text-white py-2 px-4 rounded-md mb-4 text-xl`}
      >
      حسابکردن دوای پشک 
      </button>

      <label htmlFor="remainingAmount" className="block mb-2">
        کۆی داهات دوای پشک
      </label>
      <input
        type="text"
        id="remainingAmount"
        value={remainingAmount}
        readOnly
        className="block w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />
    </div>
  );
};

export default IncomeForm;
