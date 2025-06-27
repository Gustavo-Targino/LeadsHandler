import type { Lead } from "@/models/lead";
import { LeadService } from "@/services/lead.service";
import { useQuery } from "@tanstack/react-query";

export const PendingLeadsKey = 'leads:pending' as const;

export function useGetPendingLeads() {
  return useQuery<Lead[], Error>(
    {
        queryKey: [PendingLeadsKey],
        queryFn: LeadService.getPending
    }
  );
}
