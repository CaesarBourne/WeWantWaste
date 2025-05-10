import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  name: string;
  icon: React.ElementType;
  completed: boolean;
  current: boolean;
}

interface OrderStepperProps {
  steps: Step[];
}

const OrderStepper: React.FC<OrderStepperProps> = ({ steps }) => {
  return (
    <div className=" w-full py-6 px-8 lg:px-16 border-b border-border backdrop-blur-md bg-white/80 dark:bg-gray-800/80 transition-colors duration-300">
      <div className="container mx-auto w-full">
        <nav aria-label="Order Progress">
          <ol className="overflow-x-auto overflow-y-hidden flex">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const stepCircleClasses = cn(
                "h-10 w-10 cursor-pointer rounded-full flex items-center justify-center mr-2 transition-all p-2",
                step.completed
                  ? "bg-waste-green text-white dark:bg-waste-light-green dark:text-gray-900"
                  : step.current
                  ? "bg-waste-light-gray text-waste-dark-blue border border-waste-green dark:bg-gray-700 dark:text-waste-light-green dark:border-waste-light-green"
                  : "bg-waste-light-gray text-waste-gray dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed"
              );

              const stepTextClasses = cn(
                "text-sm text-nowrap cursor-pointer",
                step.current
                  ? "text-waste-dark-blue dark:text-waste-light-green"
                  : "text-waste-gray dark:text-gray-400 cursor-not-allowed"
              );

              const chevronColor = "h-4 w-4 text-waste-gray dark:text-gray-500";

              return (
                <div className="flex justify-center items-center" key={step.id}>
                  <li
                    className={cn(
                      "flex items-center justify-center",
                      step.current && "font-medium"
                    )}
                  >
                    <div className={stepCircleClasses}>
                      {step.completed ? (
                        <div className="text-xl p-4">✓</div>
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </div>
                    <span className={stepTextClasses}>{step.name}</span>
                  </li>

                  {index < steps.length - 1 && (
                    <li className="mx-2">
                      <ChevronRight className={chevronColor} />
                    </li>
                  )}
                </div>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default OrderStepper;
