import type { Lead } from "@/models/lead";
import { LeadService } from "@/services/lead.service";
import { useQuery } from "@tanstack/react-query";

export const AcceptedLeadsKey = "leads:accepted" as const;

export function useGetAcceptedLeads() {
  return useQuery<Lead[], Error>({
    queryKey: [AcceptedLeadsKey],
    queryFn: LeadService.getAccepted,
  });
}
