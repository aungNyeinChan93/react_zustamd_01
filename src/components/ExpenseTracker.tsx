import React from "react";
import useExpenses from "../stores/ExpenseStore";
import ExpenseCreateForm from "./ExpenseCreateForm";
import ExpenseLists from "./ExpenseLists";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useExpenses((store) => store);

  const totalExpense =
    expenses &&
    expenses?.reduce((current, initial) => current + initial.amount, 0);

  const now = new Date(Date.now());
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  return (
    <React.Fragment>
      <section className="sm:mt-[150px]">
        {totalExpense > 0 && (
          <>
            <div className="mx-4 sm:w-2/6 p-4 sm:mx-auto text-center ">
              <p className="inline text-base sm:text-2xl p-2 my-2 bg-gradient-to-r from-red-500 via-green-300 to-yellow-400 text-transparent bg-clip-text">
                Total Expense - {totalExpense} MMK
                <span className="ms-2 text-lg">({formattedDate})</span>
              </p>
            </div>
          </>
        )}
        <section>
          <ExpenseCreateForm
            expenses={expenses}
            addExpense={addExpense}
            removeExpense={removeExpense}
          />
          <ExpenseLists expenses={expenses} removeExpense={removeExpense} />
        </section>
      </section>
    </React.Fragment>
  );
};

export default ExpenseTracker;
