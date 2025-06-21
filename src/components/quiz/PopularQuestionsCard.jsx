export default function PopularQuestionsCard({ question }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 flex flex-col hover:shadow-md cursor-pointer">
      <p className="text-sm font-semibold text-slate-600">{question.course}</p>

      <p className="text-xs mt-3">{question.question}</p>
    </div>
  );
}
