import { useState } from "react";

function FlashCardSets() {
  return (
    <div className="mt-4 text-slate-700">
      📚 Your Flashcard Sets will appear here.
    </div>
  );
}

function Quizzes() {
  return (
    <div className="mt-4 text-slate-700">📝 Your Quizzes will appear here.</div>
  );
}

export default function LibraryOutlet() {
  const [activeTab, setActiveTab] = useState("flashcards");

  return (
    <div className="p-4">
      <p className="text-3xl font-semibold text-slate-800 mb-4">Your library</p>

      <div className="flex gap-4 border-b border-slate-200 mb-4 pt-14">
        <button
          className={`pb-2 font-medium text-sm cursor-pointer ${
            activeTab === "flashcards"
              ? "text-slate-800 border-b-2 border-indigo-600"
              : "text-slate-500 hover:text-slate-700"
          }`}
          onClick={() => setActiveTab("flashcards")}
        >
          FlashCard Sets
        </button>
        <button
          className={`pb-2 font-medium text-sm cursor-pointer ${
            activeTab === "quizzes"
              ? "text-slate-800 border-b-2 border-indigo-600"
              : "text-slate-500 hover:text-slate-700"
          }`}
          onClick={() => setActiveTab("quizzes")}
        >
          Quizzes
        </button>
      </div>

      {activeTab === "flashcards" && <FlashCardSets />}
      {activeTab === "quizzes" && <Quizzes />}
    </div>
  );
}
