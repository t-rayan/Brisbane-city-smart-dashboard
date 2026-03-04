"use client";

import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export function LiveTimer() {
  const [seconds, setSeconds] = useState(60);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter(); // Access the Next.js router

  useEffect(() => {
    if (seconds <= 0) {
      handleRefresh();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, router]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    
    // 1. Trigger the Server Component re-fetch
    router.refresh(); 

    // 2. Visual feedback delay
    setTimeout(() => {
      setSeconds(60);
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-brand/5 border border-brand/10">
      <button 
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="flex items-center gap-2 group"
      >
        <RefreshCw 
          size={12} 
          className={`text-brand transition-transform ${isRefreshing ? "animate-spin" : "group-hover:rotate-180 duration-500"}`} 
        />
        <span className="text-[10px] font-bold text-brand uppercase tracking-widest tabular-nums">
          {isRefreshing ? "Updating..." : `Sync in ${seconds}s`}
        </span>
      </button>
      
      <div className={`h-1.5 w-1.5 rounded-full bg-success ${isRefreshing ? "animate-ping" : "animate-pulse"}`} />
    </div>
  );
}