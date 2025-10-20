import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  totalRatings?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
}

const RatingStars = ({ rating, totalRatings = 0, size = "md", showCount = true }: RatingStarsProps) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizeClasses[size],
              star <= rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>
      {showCount && totalRatings > 0 && (
        <span className={cn("text-muted-foreground", textSizeClasses[size])}>
          ({totalRatings})
        </span>
      )}
    </div>
  );
};

export default RatingStars;
