import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

import { LayoutDashboard } from "lucide-react";
import Sidebar, { SidebarItem } from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Stock-Admin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <Sidebar >
                {children}
            </Sidebar>
            < Toaster />
        </div>
    );
}