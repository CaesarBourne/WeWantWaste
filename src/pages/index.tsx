import Header from "@/components/Header";
import OrderStepper from "@/components/OrderStepper";
import SkipSelector from "@/components/SkipSelector";
import { orderSteps } from "@/lib/constant";

// steps
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ">
      <Header />
      <OrderStepper steps={orderSteps} />

      <main className="flex-grow">
        <SkipSelector />
      </main>
    </div>
  );
};

export default Index;
