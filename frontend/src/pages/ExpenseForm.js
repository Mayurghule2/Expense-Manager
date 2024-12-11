import React, { useState } from 'react'
import { handleError } from '../utils';

function ExpenseForm({ addTransaction }) {

    const [expenseInfo, setExpenseInfo] = useState({
        amount: '',
        text: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyExpenseInfo = { ...expenseInfo };
        copyExpenseInfo[name] = value;
        setExpenseInfo(copyExpenseInfo);
    }

    const addExpenses = (e) => {
        e.preventDefault();
        const { amount, text } = expenseInfo;
        if (!amount || !text) {
            handleError('Please add Expense Details');
            return;
        }
        addTransaction(expenseInfo);
        setExpenseInfo({ amount: '', text: '' })
    }

    return (
        <div className='flex items-center justify-center '>
            <div className="pb-6 w-full">
            <h1 className='text-2xl lg:text-4xl font-semibold text-center p-4 w-auto shadow-lg text-gray-300' >Expense Manager</h1>
            <div className='flex items-start justify-center text-center '>
            <form onSubmit={addExpenses} className='pt-5 w-1/3'>
                <div className='text-start mb-2'>
                    <label 
                        htmlFor='text' 
                        className='font-medium text-xl block text-gray-300'>Expense Detail
                    </label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='text'
                        placeholder='Enter your Expense Detail...'
                        value={expenseInfo.text}
                        className=' bg-gray-700 text-white p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:outline-none'
                    />
                </div>
                <div className='text-start mb-2'>
                    <label
                     htmlFor='amount ' 
                     className=' font-medium block text-xl'>
                        Amount 
                     </label>
                    <input
                        onChange={handleChange}
                        type='number'
                        name='amount'
                        placeholder='Enter your Amount...'
                        value={expenseInfo.amount}
                        className='bg-gray-700 text-white p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:outline-none'
                    />
                </div>
                <button type='submit' className='w-full mt-4 bg-purple-600 rounded-lg px-2 py-2 text-white font-semibold hover:bg-purple-800 hover:shadow-lg transition duration-300'>Add Expense</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default ExpenseForm