import React from "react";
import type { SkipOption } from "@/services/skipService";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Package,
  CalendarDays,
  Ruler,
  PoundSterling,
  Info,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface SkipSummaryProps {
  selectedSkip: SkipOption | null;
  onContinue: () => void;
}

const SkipSummary: React.FC<SkipSummaryProps> = ({
  selectedSkip,
  onContinue,
}) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(value);
  };

  return (
    <div className="sticky top-[84px]">
      <Card className="border-2 shadow-sm animate-scale-in overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-waste-green/10 to-transparent dark:from-waste-light-green/10 dark:to-transparent">
          <CardTitle className="flex items-center">
            <Package className="mr-2 h-5 w-5 text-waste-green dark:text-waste-light-green" />
            Skip Summary
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-4">
          {selectedSkip ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-border">
                <span className="text-muted-foreground flex items-center">
                  <Package className="mr-2 h-4 w-4 text-waste-green dark:text-waste-light-green" />
                  Selected Skip:
                </span>
                <span className="font-medium">{selectedSkip.name}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center">
                  <Ruler className="mr-2 h-4 w-4 text-waste-green dark:text-waste-light-green" />
                  Size:
                </span>
                <span>{selectedSkip.size} Yards</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 text-waste-green dark:text-waste-light-green" />
                  Hire Period:
                </span>
                <span>{selectedSkip.hire_period_days} days</span>
              </div>

              <div className="flex justify-between items-center font-semibold text-lg pt-4 border-t border-border">
                <span className="flex items-center">
                  <PoundSterling className="mr-2 h-4 w-4 text-waste-green dark:text-waste-light-green" />
                  Total:
                </span>
                <span>{formatPrice(selectedSkip.price)}</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="p-3 mb-3 rounded-full bg-waste-green/10 dark:bg-waste-light-green/10">
                <Package className="h-6 w-6 text-waste-green dark:text-waste-light-green" />
              </div>
              <p className="text-muted-foreground">
                Please select a skip to continue
              </p>
            </div>
          )}
        </CardContent>

        {selectedSkip && (
          <CardFooter className="flex flex-col gap-4 pt-0">
            <Button
              onClick={onContinue}
              className="w-full bg-waste-green hover:bg-waste-dark-green dark:bg-waste-light-green dark:hover:bg-waste-green text-white dark:text-black cursor-pointer"
            >
              Continue to Permit Check
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
              <Info className="h-3 w-3" />
              <p>Prices include VAT and standard delivery</p>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default SkipSummary;
