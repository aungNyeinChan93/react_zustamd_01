import { create } from "zustand";

export interface Expense {
    id: number,
    amount: number,
    description: string
};

export interface ExpenseStore {
    expenses: Expense[],
    addExpense: (newExpense: Expense) => void,
    removeExpense: (id: number) => void
};

const useExpenses = create<ExpenseStore>((set) => ({
    expenses: [],
    addExpense: (newExpense) =>
        set(state => ({ expenses: [...state.expenses, newExpense] })),
    removeExpense: (id) =>
        set(state => ({ expenses: state.expenses.filter(expense => expense.id !== id) }))
}));

export default useExpenses;