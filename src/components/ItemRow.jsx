import Image from "next/image";
import BookmarkButton from "./BookmarkButton";

export default function ItemRow({ item, saved, onToggle, onView }) {
    return (
        <div className="flex items-center gap-5 py-4 border-b border-[#21262d] last:border-0">
            {/* Thumbnail */}
            <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 bg-[#161b22] border border-[#21262d]">
                <Image
                    src={item.image}
                    alt={item.item_name}
                    width={72}
                    height={72}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{item.item_name}</span>
                    <span className="text-gray-300 text-sm">${item.item_price.toFixed(2)}</span>
                    <BookmarkButton saved={saved} onToggle={onToggle} />
                </div>
                <p className="text-gray-500 text-sm leading-snug">{item.item_description}</p>
            </div>

            {/* View button */}
            <button onClick={onView} className="shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors cursor-pointer">
                View
            </button>
        </div>
    );
}
