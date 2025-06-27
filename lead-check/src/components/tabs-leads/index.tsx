import { AcceptedLeads } from "../accepted-leads";
import { InvitedLeads } from "../invited-leads";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function LeadsTabs() {
  return (
    <Tabs defaultValue="invited" className="w-full items-center">
      <TabsList className="w-full">
        <TabsTrigger value="invited">Invited</TabsTrigger>
        <TabsTrigger value="accepted">Accepted</TabsTrigger>
      </TabsList>

      <div className="w-full h-screen">
        <TabsContent value="invited">
          <InvitedLeads />
        </TabsContent>
        <TabsContent value="accepted">
          <AcceptedLeads />
        </TabsContent>
      </div>
    </Tabs>
  );
}
