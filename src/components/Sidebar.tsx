'use client'
import { MoreVertical, ChevronLast, ChevronFirst, User, Grid, PackageSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, createContext, useState, ReactNode } from "react";
import SettingProfile from "./SettingsProfile";

const SidebarContext = createContext({ expanded: true });

const Sidebar: React.FC = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`h-screen transition-all flex ${expanded ? "w-80" : "w-16"}`
        }>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">
                        <SidebarItem
                            icon={< User size={20} />}
                            text="Dashboard"
                            href="/dashboard"
                        />
                        <SidebarItem
                            icon={<Grid size={20} />}
                            text="Category"
                            href="/category"
                        />
                        <SidebarItem
                            icon={<PackageSearch size={20} />}
                            text="Product"
                            href="/product"
                        />
                    </ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <Link href="/profile">
                        <Image
                            src="/avatar.svg"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </Link>
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <div>
                            <SettingProfile />
                        </div>
                    </div>
                </div>
            </nav>
        </aside >
    );
};

interface TSidebarItem {
    icon: ReactNode;
    text: string;
    href?: string;
    active?: boolean;
    alert?: boolean;
}

const SidebarItem: React.FC<TSidebarItem> = ({ icon, text, href = "#", active, alert }) => {
    const { expanded } = useContext(SidebarContext);

    return (
        <Link href={href}>
            <li
                className={`
                relative flex items-center py-2 px-3 my-1
                bg-gray-200
                font-medium rounded-md cursor-pointer
                hover:bg-indigo-500 hover:text-white
                transition-colors group
                ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
            `}
            >
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                    {text}
                </span>
                {alert && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
                )}
                {!expanded && (
                    <div
                        className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-indigo-100 text-indigo-800 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                `}
                    >
                        {text}
                    </div>
                )}
            </li>
        </Link>
    );
};

export default Sidebar;
export { SidebarItem };