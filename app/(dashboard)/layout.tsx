import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:col-span-1 lg:block lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="px-8 py-16 lg:px-16">{children}</div>
      </div>
    </main>
  );
}
