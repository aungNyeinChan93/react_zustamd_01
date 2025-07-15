import React from "react";
import type { ExpenseStore } from "../stores/ExpenseStore";

const ExpenseCreateForm: React.FC<ExpenseStore> = ({
  expenses,
  addExpense,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addExpenseSubmit = (data: any) => {
    const expenseData = {
      id: expenses.length + 1,
      amount: Number(data.get("amount")),
      description: data.get("description"),
    };
    addExpense(expenseData);
  };
  return (
    <React.Fragment>
      <section className="mx-2 sm:w-2/6 sm:mx-auto p-6 my-2 shadow-2xl border rounded-3xl border-amber-200">
        <form action={addExpenseSubmit}>
          <h3 className="font-bold text-center p-4 text-indigo-400 underline underline-offset-4 text-2xl decoration-amber-400">
            Expense Tracker
          </h3>
          <div>
            <label className="mb-2 text-slate-900 font-medium text-lg block">
              Amount
            </label>
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-slate-900 font-medium text-lg block">
              Description
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <button
            className="px-4 py-2 my-4 bg-indigo-400 rounded "
            type="submit"
          >
            Add Expense
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default ExpenseCreateForm;
