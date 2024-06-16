import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Stock-Admin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-between">
            <Sidebar />
            <Card className="w-full h-screen mr-1 ml-1">
                <CardContent>
                    {children}
                </CardContent>
            </Card>
            < Toaster />
        </div>
    );
}