
import { create } from "zustand";

export interface Quote {
    id: number,
    quote: string,
    author: string
}

export interface QuoteStore {
    quotes: Quote[],
    setQuotes: (quotes: Quote[]) => void,
    removeQuote: (id: number) => void,
    searchQuery: string,
    searchByQuery: (query: string) => void,
};

const useQuoteStore = create<QuoteStore>((set) => ({
    quotes: [],
    setQuotes: (quotes: Quote[]) => set(({ quotes: [...quotes] })),
    removeQuote: (id: number) => set(state => ({ quotes: state.quotes.filter(q => q.id !== id) })),
    searchQuery: '',
    searchByQuery: (query: string) =>
        set(({ searchQuery: query }))
}))

export default useQuoteStore;