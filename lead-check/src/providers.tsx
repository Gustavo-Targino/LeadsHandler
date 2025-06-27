import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { queryClient } from "./lib/query-client";

interface AppProvider {
  children: ReactNode;
}

export function AppProvider({ children }: AppProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
