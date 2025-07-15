import React, { useEffect } from "react";
import useQuoteStore from "../stores/QuoteStore";
import QuoteLists from "./QuoteLists";

const Quote = () => {
  const { quotes, searchByQuery, searchQuery, setQuotes } = useQuoteStore(
    (store) => store
  );
  const fetchQuotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes");
    const { quotes } = await response.json();
    setQuotes(quotes);
  };

  useEffect(() => {
    fetchQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterQuotes =
    searchQuery !== ""
      ? quotes.filter((q) =>
          q.author.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : quotes;

  return (
    <React.Fragment>
      <div>
        <form action="">
          <div className="w-1/4 mx-auto">
            <label className="mb-2 text-slate-900 font-medium text-lg block">
              Search By Author
            </label>
            <input
              type="text"
              value={searchQuery}
              placeholder="Author"
              onChange={(e) => searchByQuery(e.target.value)}
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
        </form>
      </div>
      <section className="p-4 my-2 grid sm:grid-cols-4 gap-4">
        {filterQuotes &&
          filterQuotes?.map((q) => {
            return <QuoteLists key={q.id} {...q} />;
          })}
      </section>
    </React.Fragment>
  );
};

export default Quote;
