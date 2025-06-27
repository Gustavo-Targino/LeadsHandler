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
          <AlertDialogCancel>Cancel</AlertDialogCancel>
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
