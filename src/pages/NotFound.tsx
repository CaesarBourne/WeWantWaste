import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="flex justify-center">
          <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
          </div>
        </div>

        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">
          Sorry, we couldn’t find the page you were looking for.
        </p>

        <div className="flex justify-center">
          <Button asChild className="gap-2">
            <a href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          If you believe this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
