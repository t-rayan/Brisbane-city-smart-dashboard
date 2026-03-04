import { LucideIcon, ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  count?: number;
  showViewAll?: boolean;
}

export function SectionHeader({ title, subtitle, Icon, count, showViewAll = true }: SectionHeaderProps) {
  return (
    <div className="p-4 border-b border-muted/10 bg-background/80 backdrop-blur-md rounded-t-2xl z-10 sticky top-0 flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        {/* Icon Box - Exactly matches Event List */}
        <div className="p-1.5 bg-brand/10 rounded-md border border-brand/20">
          <Icon className="w-5 h-5 text-brand" />
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-md font-bold text-foreground leading-tight">
              {title}
            </h3>
            {count !== undefined && (
              <span className="px-1.5 py-0.5 rounded bg-muted/10 text-muted text-[9px] font-bold border border-muted/10">
                {count}
              </span>
            )}
          </div>
          <p className="text-[10px] text-muted font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Action Button - Matches "View All" style */}
      {/* {showViewAll && (
        <button className="text-[10px] font-bold text-muted hover:text-brand transition-colors flex items-center gap-1">
          View All <ArrowRight className="w-3 h-3" />
        </button>
      )} */}
    </div>
  );
}