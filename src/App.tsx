import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogGraduatedYoungest from "./pages/blog/GraduatedYoungest";
import BlogMsKaren from "./pages/blog/MsKaren";
import BlogStartupLessons from "./pages/blog/StartupLessons";
import BlogHalfMarathon from "./pages/blog/HalfMarathon";
import BlogTsinghua from "./pages/blog/Tsinghua";
import BlogSuperAnalyst from "./pages/blog/SuperAnalyst";
import BlogIvanBrowser from "./pages/blog/IvanBrowser";
import Consumption from "./pages/Consumption";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/writing" element={<Blogs />} />
          <Route path="/writing/super-analyst" element={<BlogSuperAnalyst />} />
          <Route path="/writing/ivan-browser" element={<BlogIvanBrowser />} />
          <Route path="/writing/graduated-youngest" element={<BlogGraduatedYoungest />} />
          <Route path="/writing/ms-karen" element={<BlogMsKaren />} />
          <Route path="/writing/startup-lessons" element={<BlogStartupLessons />} />
          <Route path="/writing/half-marathon" element={<BlogHalfMarathon />} />
          <Route path="/writing/tsinghua" element={<BlogTsinghua />} />
          <Route path="/consuming" element={<Consumption />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
