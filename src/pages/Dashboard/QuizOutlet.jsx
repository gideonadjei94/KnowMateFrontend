import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FlaskConical,
  Languages,
  LibraryBig,
  NotebookText,
  PencilRuler,
  PenLine,
} from "lucide-react";
import FileUploader from "../../components/FileUploadForm";

const subjects = {
  Literature: ["Novels", "Poems", "Plays"],
  "Arts and Humanities": [
    "Philosophy",
    "English",
    "History",
    "Music",
    "Dance",
    "Theater",
  ],
  Languages: ["French", "German", "Spanish", "Latin", "English"],
  Math: [
    "Arithmetic",
    "Algebra",
    "Geometry",
    "Statistics",
    "Calculus",
    "Probability",
  ],
  Science: [
    "Biology",
    "Chemistry",
    "Physics",
    "Medicine",
    "Computer Science",
    "Engineering",
    "Earth Science",
  ],
  "Social Science": [
    "Psychology",
    "Business",
    "Sociology",
    "Economics",
    "Law",
    "Human Geography",
    "Political Science",
  ],
};

const subjectIcons = {
  Literature: <LibraryBig className="size-5 text-cyan-600" />,
  Languages: <Languages className="size-5 text-blue-600" />,
  Math: <PencilRuler className="size-5 text-yellow-500" />,
  Science: <FlaskConical className="size-5 text-red-600" />,
  "Social Science": <NotebookText className="size-5 text-green-600" />,
  "Arts and Humanities": <PenLine className="size-5 text-purple-600" />,
};

export default function QuizOutlet() {
  const [showSubjects, setShowSubjects] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="px-5 py-4 relative">
      <div className="flex items-center justify-between px-10">
        <div className="flex items-center gap-x-2 font-medium text-slate-600 text-sm cursor-pointer relative">
          <div
            className="flex items-center gap-x-2"
            onClick={() => {
              setShowSubjects(!showSubjects);
            }}
          >
            <p>{selectedSubject || "Select Subject"}</p>
            <ChevronDown className="size-4" />
          </div>

          {/* Subjects Dropdown */}
          {showSubjects && (
            <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md w-[480px] h-[320px]  z-50 flex py-4 border border-gray-200">
              <div className="basis-[60%] border-r border-gray-200 ">
                {Object.keys(subjects).map((subject) => (
                  <div
                    className="flex items-center justify-between hover:bg-gray-100 cursor-pointer px-4"
                    onClick={() => setSelectedSubject(subject)}
                  >
                    <div className="flex items-center gap-x-3">
                      {subjectIcons[subject]}
                      <div
                        key={subject}
                        className="px-4 py-3 text-sm text-slate-700 font-medium"
                      >
                        {subject}
                      </div>
                    </div>

                    <ChevronRight />
                  </div>
                ))}
              </div>

              <div className="basis-[40%] overflow-y-auto">
                {selectedSubject !== null &&
                  Object.values(subjects[selectedSubject]).map(
                    (course, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm text-slate-700"
                        onClick={() => setShowSubjects(false)}
                      >
                        {course}
                      </div>
                    )
                  )}
              </div>
            </div>
          )}
        </div>

        <button className="px-3 py-2 rounded-lg text-sm bg-slate-800 text-white cursor-pointer font-medium hover:bg-slate-700">
          Start Quiz
        </button>
      </div>

      <div className="mt-[10%]">
        <FileUploader />
      </div>
    </div>
  );
}
