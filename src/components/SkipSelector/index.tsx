import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSkipOptions } from "@/services/skipService";
import type { SkipOption } from "@/services/skipService";
import SkipCard from "@/components/SkipCard";
import SkipSummary from "@/components/SkipSummary";
import { toast } from "sonner";
import { Package, AlertTriangle } from "lucide-react";
const SkipSelector: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<SkipOption | null>(null);

  const {
    data: skipOptions = [],
    isLoading,
    error,
  } = useQuery<SkipOption[], Error>({
    queryKey: ["skipOptions"],
    queryFn: fetchSkipOptions,
  });
  if (error) {
    toast.error("Failed to load skip options. Please try again.");
  }
  const handleSkipSelect = (skip: SkipOption) => {
    setSelectedSkip(skip);
    toast.success(`${skip.name} has been selected.`);
  };

  const handleContinue = () => {
    console.log("Continuing", selectedSkip);
    toast("Continuing to permit check.");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-waste-light-green border-t-waste-green rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Loading skip options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Package className="mr-2 h-6 w-6 text-waste-green dark:text-waste-light-green" />
              <h1 className="text-3xl font-bold">Select Your Skip</h1>
            </div>
            <p className="text-muted-foreground">
              Choose the skip size that best suits your waste removal needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skipOptions.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={handleSkipSelect}
              />
            ))}

            {skipOptions.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <div className="p-4 mb-4 rounded-full bg-yellow-50 dark:bg-yellow-900/20">
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-muted-foreground">
                  No skip options available for your location. Please try a
                  different postcode.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <SkipSummary
            selectedSkip={selectedSkip}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
