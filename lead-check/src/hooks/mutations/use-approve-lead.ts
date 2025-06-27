import { LeadService } from "@/services/lead.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAcceptLead() {

    const queryClient = useQueryClient()

   return useMutation({
        mutationFn: async(id: string) => {
             await LeadService.approve(id)
        },
        onSuccess: ()=> {},
        onError: ()=>{}
    })
}