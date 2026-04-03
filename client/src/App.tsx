import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Clients from "@/pages/Clients";
import TheBillie from "@/pages/clients/TheBillie";
import LeviAndToonk from "@/pages/clients/LeviAndToonk";
import YaleCabaret from "@/pages/clients/YaleCabaret";
import AugustWilson from "@/pages/clients/AugustWilson";
import ActorsTheatre from "@/pages/clients/ActorsTheatre";
import ShakespeareOnDraught from "@/pages/clients/ShakespeareOnDraught";
import SmocksMedia from "@/pages/clients/SmocksMedia";
import YalePathways from "@/pages/clients/YalePathways";
import PottersExhibition from "@/pages/clients/PottersExhibition";
import NiggBottom from "@/pages/clients/NiggBottom";
import EwaTheMusical from "@/pages/clients/EwaTheMusical";
import SageMedia from "@/pages/clients/SageMedia";
import Michelle from "@/pages/clients/Michelle";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/work" component={Clients} />
      <Route path="/work/the-billie" component={TheBillie} />
      <Route path="/work/levi-and-toonk" component={LeviAndToonk} />
      <Route path="/work/yale-cabaret" component={YaleCabaret} />
      <Route path="/work/august-wilson" component={AugustWilson} />
      <Route path="/work/actors-theatre" component={ActorsTheatre} />
      <Route path="/work/shakespeare-on-draught" component={ShakespeareOnDraught} />
      <Route path="/work/smocks-media" component={SmocksMedia} />
      <Route path="/work/yale-pathways" component={YalePathways} />
      <Route path="/work/potters-exhibition" component={PottersExhibition} />
      <Route path="/work/nigg-bottom" component={NiggBottom} />
      <Route path="/work/ewa-the-musical" component={EwaTheMusical} />
      <Route path="/work/sage-media" component={SageMedia} />
      <Route path="/work/michelle" component={Michelle} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
