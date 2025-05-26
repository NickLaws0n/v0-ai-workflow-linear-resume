import React from "react";
import { Inbox } from "lucide-react";

export default function InboxPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center">
      <Inbox size={96} className="mb-6 text-[#B3B3B3]" />
      <span className="text-2xl text-[#8A8F98] font-semibold">Nothing here....yet ;)</span>
    </div>
  );
} 