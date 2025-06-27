import type { Lead } from "@/models/lead";
import { LeadService } from "@/services/lead.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PendingLeadsKey } from "../queries/use-get-pending-leads";

interface DeclineLeadParams {
  lead_id: string;
}

export function useDeclineLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ lead_id }: DeclineLeadParams) => {
      await LeadService.decline(lead_id);
      return lead_id;
    },
    onSuccess: (lead_id) => {
      queryClient.setQueryData<Lead[]>(
        [PendingLeadsKey],
        (prev) => prev?.filter((lead) => lead.id !== lead_id) ?? []
      );
    },
  });
}
