import { Button } from "../ui/button";
import { LeadInvitation } from "./lead-invitation";

interface CardFooterProps {
  price: number;
}

export function CardFooter({ price }: CardFooterProps) {
  return (
    <div className="flex items-center gap-5 pt-2">
      <div className="flex gap-2">
        <Button className="bg-primary hover:bg-primary/80 cursor-pointer">
          Accept
        </Button>
        <Button variant="secondary" className="cursor-pointer">
          Decline
        </Button>
      </div>
      <LeadInvitation price={price} />
    </div>
  );
}
