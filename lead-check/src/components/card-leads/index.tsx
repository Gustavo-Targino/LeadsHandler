import type { Lead } from "@/models/lead";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { format, parseISO } from "date-fns";
import { LeadInvitation } from "./lead-invitation";
import { CardFooter } from "./card-footer";
import { CardContactInfo } from "./card-contact-info";

type CardsLeadsProps = {
  lead: Lead;
  acceptedLead: boolean;
};

function formatLeadDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "MMMM d '@' h:mm a");
}

export function CardLeads({ lead, acceptedLead }: CardsLeadsProps) {
  const nameToShow = acceptedLead
    ? lead.contactFullName
    : lead.contactFirstName;

  return (
    <Card className="w-full mx-auto rounded-none shadow-sm p-0 mb-5">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-secondary font-bold">
                {lead.contactFirstName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{nameToShow}</p>
              <p className="text-xs text-muted-foreground">
                {formatLeadDate(lead.dateCreated)}
              </p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center text-sm gap-4">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{lead.suburb}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase size={14} />
            <span>{lead.category}</span>
          </div>
          <div>
            Job ID: <span className="text-foreground">{lead.id}</span>
          </div>

          {acceptedLead && <LeadInvitation price={lead.price} />}
        </div>

        <Separator />

        {acceptedLead && (
          <div className="flex gap-2.5">
            <CardContactInfo icon={Phone} info={lead.contactPhoneNumber} />

            <CardContactInfo icon={Mail} info={lead.contactEmail} />
          </div>
        )}

        <p className="text-sm text-foreground">{lead.description}</p>

        {!acceptedLead && (
          <>
            <Separator />
            <CardFooter price={lead.price} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
