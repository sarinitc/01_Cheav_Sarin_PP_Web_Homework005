import ItemList from "../components/ItemList";

const navItems = [
    { label: "Overview" },
    { label: "Items" },
    { label: "Orders" },
    { label: "Customers" },
    { label: "Settings" },
];

export default function Home() {
    return (
        <div className="flex flex-col h-screen bg-[#0d1117] overflow-hidden">

            {/* Header */}
            <header className="bg-gray-900 text-white flex items-center justify-between px-6 py-3 shadow-lg z-10 shrink-0">
                <div className="flex items-center gap-3">
                    <img src="/profile.jpg" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-lg font-bold tracking-wide">Dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="bg-gray-800 text-sm text-gray-300 placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-64 hidden md:block"
                    />
                </div>
            </header>

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">

                {/* Sidebar */}
                <aside className="w-52 bg-[#1a1f2e] text-white flex flex-col py-5 px-3 shrink-0">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 px-2">Menu</p>
                    {navItems.map((item, i) => (
                        <a key={i} href="#"
                            className="px-4 py-2.5 rounded-lg text-sm mb-1 transition bg-[#2a2f3e] text-white hover:bg-[#353b4e]">
                            {item.label}
                        </a>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden flex flex-col bg-[#0d1117]">
                    <ItemList />
                </main>

            </div>
        </div>
    );
}
