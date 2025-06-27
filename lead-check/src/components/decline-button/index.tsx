import { Button } from "../ui/button";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useDeclineLead } from "@/hooks/mutations/use-decline-lead";
import { getApiErrorMessage } from "@/services/utils";

interface DeclineButtonProps {
  lead_id: string;
}

export function DeclineButton({ lead_id }: DeclineButtonProps) {
  const { mutateAsync: declineLead, isPending: isPendingDeclineLead } =
    useDeclineLead();

  async function handleDeclineLead() {
    await declineLead(
      { lead_id },
      {
        onSuccess: () => {
          toast.success("Lead declined");
        },
        onError: (error) => {
          toast.error("An error occurred while declining the lead", {
            description: getApiErrorMessage(error),
          });
        },
      }
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" className="cursor-pointer">
          Decline
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            The lead will be declined
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button asChild variant="secondary">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </Button>

          <AlertDialogAction
            asChild
            onClick={handleDeclineLead}
            className="bg-primary hover:bg-primary/80 cursor-pointer"
          >
            <Button loading={isPendingDeclineLead}>Decline</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
