import React from "react";
import type { Expense } from "../stores/ExpenseStore";

interface ExpenseListsProps {
  expenses: Expense[];
  removeExpense: (id: number) => void;
}
const ExpenseLists: React.FC<ExpenseListsProps> = ({
  expenses,
  removeExpense,
}) => {
  return (
    <React.Fragment>
      <section className="w-2/6 mx-auto my-4">
        {expenses &&
          Array.isArray(expenses) &&
          expenses?.map((expense) => {
            return (
              <div
                className="p-4 bg-green-50 rounded shadow-2xl my-2"
                key={expense.id}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold p-2 text-red-400">
                      {expense.amount} MMK
                    </p>
                    <p className="p-2 text-black/65 text-base">
                      {expense.description}
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="px-2 py-1 rounded bg-red-400"
                      onClick={() => removeExpense(Number(expense.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default ExpenseLists;
