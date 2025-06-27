import { AcceptButton } from "../accept-button";
import { DeclineButton } from "../decline-button";
import { Button } from "../ui/button";
import { LeadInvitation } from "./lead-invitation";

interface CardFooterProps {
  price: number;
  lead_id: string;
}

export function CardFooter({ price, lead_id }: CardFooterProps) {
  return (
    <div className="flex items-center gap-5 pt-2">
      <div className="flex gap-2">
        <AcceptButton lead_id={lead_id} />
        <DeclineButton lead_id={lead_id} />
      </div>
      <LeadInvitation price={price} />
    </div>
  );
}
