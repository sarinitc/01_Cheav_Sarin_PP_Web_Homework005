import { Bookmark } from "lucide-react";

export default function BookmarkButton({ saved, onToggle }) {
    return (
        <button
            onClick={onToggle}
            aria-label={saved ? "Remove bookmark" : "Add bookmark"}
            className="transition-colors"
        >
            <Bookmark
                className={`w-4 h-4 transition-colors ${
                    saved
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-500 hover:text-gray-300"
                }`}
            />
        </button>
    );
}
