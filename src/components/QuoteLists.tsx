import React from "react";
import useQuoteStore from "../stores/QuoteStore";

interface QuoteListsProps {
  id: number;
  author: string;
  quote: string;
}

const QuoteLists: React.FC<QuoteListsProps> = ({ id, author, quote }) => {
  const { removeQuote } = useQuoteStore((store) => store);
  return (
    <React.Fragment>
      <article className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline">
                {author}
              </a>
            </h3>

            <p className="line-clamp-2 text-sm text-gray-700">{quote}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-red-600 px-3 py-1.5 text-white cursor-pointer">
            <span
              onClick={() => removeQuote(Number(id))}
              className="text-[10px] font-medium sm:text-xs"
            >
              ❌
            </span>
          </strong>
        </div>
      </article>
    </React.Fragment>
  );
};

export default QuoteLists;
