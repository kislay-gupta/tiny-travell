import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CityDetail from "./pages/CityDetail";
import { RootLayout } from "./layout/Index";
import DestinationDetail from "./pages/DestinationDetail";
import MustVisitPlaces from "./pages/MustVisitPlaces";
import PopularDestinations from "./pages/PopularDestinations";

const App = () => (
  <>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-left" richColors closeButton />
      <>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cities/:citySlug" element={<CityDetail />} />
            <Route
              path="/cities/:citySlug/:destinationSlug"
              element={<DestinationDetail />}
            />
            <Route path="/must-visit-places" element={<MustVisitPlaces />} />
            <Route
              path="/popular-destinations"
              element={<PopularDestinations />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    </TooltipProvider>
  </>
);

export default App;
