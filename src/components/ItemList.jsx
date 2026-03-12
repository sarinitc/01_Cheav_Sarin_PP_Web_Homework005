"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { items } from "../../data/items";
import ItemRow from "./ItemRow";

export default function ItemList() {
  const [savedIds, setSavedIds] = useState(
    () => new Set(items.filter((i) => i.saved).map((i) => i.id)),
  );
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = (id) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const displayed = (() => {
    let list = showBookmarked
      ? items.filter((i) => savedIds.has(i.id))
      : [...items];
    if (sortOrder === "asc")
      list = [...list].sort((a, b) => a.item_name.localeCompare(b.item_name));
    if (sortOrder === "desc")
      list = [...list].sort((a, b) => b.item_name.localeCompare(a.item_name));
    return list;
  })();

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Sub-header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#21262d] shrink-0">
        <button
          onClick={() => setShowBookmarked(false)}
          className="text-gray-300 text-sm px-4 py-1.5 rounded-full border border-[#30363d] bg-[#161b22] hover:bg-[#1e2433] hover:text-yellow-400 transition-colors cursor-pointer"
        >
          Back
        </button>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-gray-500">
            <button
              onClick={() => setShowBookmarked((v) => !v)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors cursor-pointer ${
                showBookmarked
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
              aria-label="Toggle bookmarked view"
            >
              <span className="font-semibold text-sm">Your Bookmark</span>
              <Bookmark
                className={`w-4 h-4 ${showBookmarked ? "fill-yellow-400 text-yellow-400" : ""}`}
              />
            </button>
            <button
              onClick={() => setSortOrder((p) => (p === "asc" ? null : "asc"))}
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                sortOrder === "asc"
                  ? "text-indigo-400"
                  : "hover:bg-[#1e2433] hover:text-yellow-400"
              }`}
              aria-label="Sort A to Z"
              title="Sort A→Z"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8l4-4 4 4" />
                <path d="M7 4v16" />
                <path d="M20 8h-5" />
                <path d="M15 10V8.5a2.5 2.5 0 015 0V10" />
                <path d="M15 14h5l-5 4h5" />
              </svg>
            </button>
            <button
              onClick={() =>
                setSortOrder((p) => (p === "desc" ? null : "desc"))
              }
              className={`p-1.5 rounded transition-colors cursor-pointer ${
                sortOrder === "desc"
                  ? "text-indigo-400"
                  : "hover:bg-[#1e2433] hover:text-yellow-400"
              }`}
              aria-label="Sort Z to A"
              title="Sort Z→A"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 16l4 4 4-4" />
                <path d="M7 20V4" />
                <path d="M20 8h-5" />
                <path d="M15 10V8.5a2.5 2.5 0 015 0V10" />
                <path d="M15 14h5l-5 4h5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6">
        {displayed.length === 0 && (
          <p className="text-gray-500 text-sm text-center mt-10">
            No bookmarked items.
          </p>
        )}
        {displayed.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            saved={savedIds.has(item.id)}
            onToggle={() => toggle(item.id)}
            onView={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 w-full max-w-sm mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold text-base">
                Item Details
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white text-sm cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-white font-semibold">ID:</span>{" "}
              {selectedItem.id}
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-white font-semibold">Name:</span>{" "}
              {selectedItem.item_name}
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-white font-semibold">Price:</span> $
              {selectedItem.item_price.toFixed(2)}
            </p>
            <p className="text-white font-semibold text-sm mb-1">
              Description:
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedItem.item_description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
