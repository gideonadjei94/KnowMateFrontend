import { useState } from "react";
import { UploadCloud, X, AlertCircle } from "lucide-react";

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "text/plain", // .txt
];

export default function FileUploader({ onFileSelect }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];
    let errorMessage = "";

    files.forEach((file) => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        errorMessage = "Unsupported file format.";
      } else if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        errorMessage = "File size must be under 5MB.";
      } else {
        validFiles.push(file);
      }
    });

    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError("");
      setSelectedFiles(validFiles);
      if (onFileSelect) onFileSelect(validFiles);
    }
  };

  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (onFileSelect) onFileSelect(newFiles);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label
        htmlFor="file-upload"
        className="cursor-pointer border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 transition"
      >
        <UploadCloud className="w-10 h-10 text-slate-500 mb-4" />
        <p className="text-sm text-slate-600">
          Click or drag to upload (.pdf, .pptx, .docx, .txt – max 5MB)
        </p>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.pptx,.docx,.txt"
        />
      </label>

      {error && (
        <div className="mt-2 text-red-600 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {/* File preview */}
      {selectedFiles.length > 0 && (
        <ul className="mt-4 space-y-2">
          {selectedFiles.map((file, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white border rounded-md px-4 py-2 shadow-sm text-sm"
            >
              <span className="truncate w-[80%]">{file.name}</span>
              <button
                onClick={() => removeFile(index)}
                className="text-slate-500 hover:text-red-500 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
