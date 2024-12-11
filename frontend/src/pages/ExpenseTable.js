import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens }) => {

    return (
        // <div className="expense-list relative w-1/2 transform translate-x-1/2 pt-6">
        //     {expenses.map((expense, index) => (
        //         <div key={index} className="expense-item flex justify-between items-center gap-2  ">
        //             <button className="delete-button bg-red-500 text-white border-none px-3 py-1 text-sm cursor-pointer rounded font-semibold" onClick={() =>
        //                 deleteExpens(expense._id)}>X</button>
        //             <div className="expense-description font-semibold">{expense.text}</div>
        //             <div
        //                 className="expense-amount font-semibold "
        //                 style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
        //             >₹{expense.amount}</div>
        //         </div>
        //     ))}
        // </div>

        <div class=" relative transform translate-x-1/2 p-2 w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl rounded-md">
  {expenses.map((expense, index) => (
                <div key={index} className="expense-item grid justify-between items-center  grid-cols-6 gap-y-4 p-2 ">
                    <div className=''>
                    <button className="delete-button bg-red-700 text-white border-none px-2 lg:px-3 py-1 text-sm cursor-pointer rounded font-semibold" onClick={() =>
                        deleteExpens(expense._id)}>X</button>
                        </div>
                    <div className="expense-description font-semibold col-span-4 pl-2 lg:pl-0">{expense.text}</div>
                    <div
                        className="expense-amount font-semibold "
                        style={{ color: expense.amount > 0 ? '#22C55E' : '#B91C1C' }}
                    >₹{expense.amount}</div>
                </div>
            ))}



        </div>
    );
};

export default ExpenseTable;
