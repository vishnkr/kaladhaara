import React from "react";

type Props = {
  show: boolean;
  message: string;
  onClose: () => void;
};

export default function NoticeToast({ show, message, onClose }: Props) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center pointer-events-none">
      <div className="mb-6 max-w-xl w-[92%] rounded-md bg-orange-100 text-slate-800 px-4 py-3 shadow-lg border border-orange-200 pointer-events-auto">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-lg">ℹ️</span>
          <p className="text-sm md:text-base flex-1">{message}</p>
          <button
            onClick={onClose}
            className="ml-2 shrink-0 rounded px-2 py-1 text-sm bg-white/80 hover:bg-white border"
            aria-label="Dismiss notice"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
