
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PlanSelectionPage from "./pages/PlanSelectionPage";
import EssentialPlanPage from "./pages/plans/EssentialPlanPage";
import GardenPlanPage from "./pages/plans/GardenPlanPage";
import FamilyPlanPage from "./pages/plans/FamilyPlanPage";
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/planos" element={<PlanSelectionPage />} />
          <Route path="/planos/essencial" element={<EssentialPlanPage />} />
          <Route path="/planos/horta" element={<GardenPlanPage />} />
          <Route path="/planos/familia" element={<FamilyPlanPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
