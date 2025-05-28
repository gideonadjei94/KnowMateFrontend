import { useState } from "react";
import { Image, Trash2 } from "lucide-react";

export default function FlashCardsOutlet() {
  const [flashcards, setFlashcards] = useState([
    { term: "", definition: "", id: Date.now() },
  ]);

  const addFlashcard = () => {
    setFlashcards((prev) => [
      ...prev,
      { term: "", definition: "", id: Date.now() + Math.random() },
    ]);
  };

  const removeFlashcard = (id) => {
    setFlashcards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="w-full h-full p-8">
      <p className="text-3xl font-semibold text-slate-700 mb-4">
        Create a new flashcard set
      </p>

      <form className="mt-8">
        <div className="bg-white rounded-lg p-3 mb-6 border border-slate-200">
          <input
            type="text"
            placeholder="Enter a title, like - Biology, Evolution"
            className="w-full font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
          />
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200">
          <textarea
            placeholder="Add a description..."
            className="w-full font-semibold text-slate-800 placeholder-slate-500 focus:outline-none"
          />
        </div>

        {flashcards.map((card, index) => (
          <div
            key={card.id}
            className="mt-6 bg-white rounded-lg p-5 border border-slate-200"
          >
            <div className="flex items-center justify-between text-slate-400 border-b pb-3 border-slate-200">
              <p>{index + 1}</p>
              <Trash2
                className="size-5 cursor-pointer text-red-600"
                onClick={() => removeFlashcard(card.id)}
              />
            </div>

            <div className="flex gap-x-4 mt-5">
              <div className="w-[45%]">
                <input
                  type="text"
                  placeholder="Enter term"
                  className="outline-none py-1.5 border-b-2 placeholder-slate-400 border-slate-300 mb-1 w-full"
                  value={card.term}
                  onChange={(e) =>
                    setFlashcards((prev) =>
                      prev.map((fc) =>
                        fc.id === card.id ? { ...fc, term: e.target.value } : fc
                      )
                    )
                  }
                />
                <p className="text-slate-400 font-semibold text-sm">TERM</p>
              </div>
              <div className="w-[45%]">
                <input
                  type="text"
                  placeholder="Enter definition"
                  className="outline-none py-1.5 border-b-2 placeholder-slate-400 border-slate-300 mb-1 w-full"
                  value={card.definition}
                  onChange={(e) =>
                    setFlashcards((prev) =>
                      prev.map((fc) =>
                        fc.id === card.id
                          ? { ...fc, definition: e.target.value }
                          : fc
                      )
                    )
                  }
                />
                <p className="text-slate-400 font-semibold text-sm">
                  DEFINITION
                </p>
              </div>

              <div className="flex flex-col gap-y-1.5 items-center border-3 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 cursor-pointer">
                <Image className="size-5" />
                <p className="text-sm">Image</p>
              </div>
            </div>
          </div>
        ))}
      </form>

      <button
        type="button"
        onClick={addFlashcard}
        className="mt-8 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex justify-self-end text-sm font-semibold cursor-pointer"
      >
        Add flashcard
      </button>
    </div>
  );
}
