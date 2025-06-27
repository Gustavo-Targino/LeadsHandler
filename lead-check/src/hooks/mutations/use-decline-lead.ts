import { LeadService } from "@/services/lead.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeclineLead() {

    const queryClient = useQueryClient()

   return useMutation({
        mutationFn: async(id: string) => {
             await LeadService.decline(id)
        },
        onSuccess: ()=> {},
        onError: ()=>{}
    })
}