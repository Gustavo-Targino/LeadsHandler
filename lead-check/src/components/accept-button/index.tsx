import { useAcceptLead } from "@/hooks/mutations/use-approve-lead";
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
import { getApiErrorMessage } from "@/services/utils";

interface AcceptButtonProps {
  lead_id: string;
}

export function AcceptButton({ lead_id }: AcceptButtonProps) {
  const { mutateAsync: acceptLead, isPending: isPendingAcceptLead } =
    useAcceptLead();

  async function handleAcceptLead() {
    await acceptLead(
      { lead_id },
      {
        onSuccess: () => {
          toast.success("Lead accepted");
        },
        onError: (error) => {
          toast.error("An error occurred while accepting the lead", {
            description: getApiErrorMessage(error),
          });
        },
      }
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/80 cursor-pointer">
          Accept
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            The lead will be accepted
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button asChild variant="secondary">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </Button>
          <AlertDialogAction
            asChild
            onClick={handleAcceptLead}
            className="bg-primary hover:bg-primary/80 cursor-pointer"
          >
            <Button loading={isPendingAcceptLead}>Accept</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
