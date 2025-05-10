import React from "react";
import type { SkipOption } from "@/services/skipService";
import {
  Check,
  AlertTriangle,
  Truck,
  //   Package,
  Weight,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import img4 from "@/assets/4yard.png";
import img8 from "@/assets/8yard.png";
import img12 from "@/assets/12yard.png";
import img16 from "@/assets/16yard.png";
import img20 from "@/assets/20yard.png";

interface SkipCardProps {
  skip: SkipOption;
  isSelected: boolean;
  onSelect: (skip: SkipOption) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const {
    name,
    size,
    hire_period_days,
    price,
    allowed_on_road,
    allows_heavy_waste,
  } = skip;

  const skipImages: Record<number, string> = {
    4: img4,
    8: img8,
    12: img12,
    16: img16,
    20: img20,
  };

  // Format price to GBP
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(value);
  };

  // Get skip image based on size
  const getSkipImage = (size: number): string => {
    if (size <= 6) return skipImages[4];
    if (size <= 8) return skipImages[8];
    if (size <= 12) return skipImages[12];
    if (size <= 16) return skipImages[16];
    if (size <= 40) return skipImages[20];
    return skipImages[12];
  };

  return (
    <Card
      className={cn(
        "cursor-pointer overflow-hidden transition-all duration-300 border-2 hover:shadow-lg",
        isSelected
          ? "border-waste-green dark:border-waste-light-green"
          : "border dark:border-gray-800 hover:border-waste-light-green/20 dark:hover:border-waste-green/20"
      )}
      onClick={() => onSelect(skip)}
    >
      <div className="relative overflow-hidden h-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div
          className={cn(
            "absolute inset-0 bg-waste-green/5 dark:bg-waste-green/10",
            isSelected && "bg-waste-green/10 dark:bg-waste-green/20"
          )}
        >
          {/* Skip badge */}
          <span className="skip-badge absolute top-3 left-3  font-semibold px-2 py-1 rounded-full">
            {`${size} Yards`}
          </span>

          {/* checkmark  */}
          {isSelected && (
            <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-waste-green dark:bg-waste-light-green flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
          )}

          {/* Skip image */}
          <div className="absolute right-0 bottom-0 h-28 w-full flex items-center justify-center opacity-80">
            {/* {console.log("Skip image:", getSkipImage(size))} */}
            {/* <Package className="h-16 w-16 text-waste-dark-green dark:text-waste-light-green opacity-20" /> */}
            <img
              src={getSkipImage(size)}
              alt={`${size} yard skip`}
              className="absolute w-3/4  object-contain opacity-60"
            />
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold">{name}</h3>
          {/* <p className="text-sm text-muted-foreground">{`${hire_period_days} days hire period`}</p> */}
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-waste-green dark:text-waste-light-green" />
            <span className="text-muted-foreground mr-1">Hire period:</span>
            <span className="font-medium">{hire_period_days} days</span>
          </div>

          <div className="flex items-center text-sm">
            <Truck className="h-4 w-4 mr-2 text-waste-green dark:text-waste-light-green" />
            <span className="text-muted-foreground mr-1">Delivery:</span>
            <span className="font-medium">Included</span>
          </div>

          {!allowed_on_road && (
            <div className="flex items-center mt-2 bg-yellow-50 dark:bg-yellow-950/30 text-yellow-800 dark:text-yellow-500 p-2 rounded-md">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span className="text-xs">Not allowed on road</span>
            </div>
          )}

          <div className="mt-2 space-x-2">
            {allows_heavy_waste ? (
              <Badge
                variant="outline"
                className="text-xs bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-500 border-green-200 dark:border-green-900"
              >
                <Weight className="h-3 w-3 mr-1" /> Heavy waste allowed
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="text-xs bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                No heavy waste
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="font-semibold text-lg">{formatPrice(price)}</div>
          <button
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              isSelected
                ? "bg-waste-green dark:bg-waste-light-green text-white shadow-sm"
                : "bg-secondary hover:bg-waste-light-green/20 dark:hover:bg-waste-green/20"
            )}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
