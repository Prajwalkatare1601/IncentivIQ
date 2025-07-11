
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PlanAutomation from "./pages/PlanAutomation";
import QuotaOptimization from "./pages/QuotaOptimization";
import SimulationEngine from "./pages/SimulationEngine";
import Governance from "./pages/Governance";
import SalesRepJourney from "./pages/SalesRepJourney";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plan-automation" element={<PlanAutomation />} />
          <Route path="/quota-optimization" element={<QuotaOptimization />} />
          <Route path="/simulation-engine" element={<SimulationEngine />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/sales-journey" element={<SalesRepJourney />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
