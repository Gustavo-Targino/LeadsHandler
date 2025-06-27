import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { queryClient } from "./lib/query-client";
import { Toaster } from "sonner";

interface AppProvider {
  children: ReactNode;
}

export function AppProvider({ children }: AppProvider) {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
