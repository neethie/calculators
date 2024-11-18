import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="md:grid md:grid-cols-[1fr_3fr] bg-blue-primary">
            {children}
        </div>
    );
}
