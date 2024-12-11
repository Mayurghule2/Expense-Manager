import React from "react";

function ExpenseDetails({ incomeAmt, expenseAmt }) {
  return (
    <div>
      <div className="text-lg pt-5 lg:pt-10 font-semibold flex items-center justify-center text-gray-300 mb-2 p-4 animate-pulse">
        Your Balance is ₹ {incomeAmt - expenseAmt}
      </div>
      {/* Show Income & Expense amount */}
      <div className="amounts-container font-medium grid grid-cols-2 text-slate-100">
        <div class="bg-gray-800 p-5 rounded-lg shadow-md text-center w-1/3 mx-auto">
          <span className="income-amount">
            <div className="text-xl text-green-400">Income</div>
            <p className="text-2xl font-semibold text-white"> ₹{incomeAmt}</p>
          </span>
        </div>

        <div class="bg-gray-800 p-5 rounded-lg shadow-md text-center w-1/3 mx-auto ">
          <span className="expense-amount">
            <div className="text-xl text-red-600">Expense</div>
            <span className="text-2xl font-semibold text-white"> ₹{expenseAmt}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
