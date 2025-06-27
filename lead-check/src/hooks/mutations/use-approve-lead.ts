import { LeadService } from "@/services/lead.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PendingLeadsKey } from "../queries/use-get-pending-leads"
import type { Lead } from "@/models/lead"

interface AcceptLeadParams {
  lead_id: string
}

export function useAcceptLead() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ lead_id }: AcceptLeadParams) => {
      await LeadService.approve(lead_id)
      return lead_id
    },
    onSuccess: (lead_id) => {
      queryClient.setQueryData<Lead[]>([PendingLeadsKey], (prev) =>
        prev?.filter((lead) => lead.id !== lead_id) ?? []
      )
    },
  })
}
