import { AcceptedLeads } from "../accepted-leads";
import { InvitedLeads } from "../invited-leads";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function LeadsTabs() {
  return (
    <Tabs defaultValue="account" className="w-full items-center">
      <TabsList className="w-full">
        <TabsTrigger value="account">Invited</TabsTrigger>
        <TabsTrigger value="password">Accepted</TabsTrigger>
      </TabsList>

      <div className="w-full h-screen">
        <TabsContent value="account">
          <InvitedLeads />
        </TabsContent>
        <TabsContent value="password">
          <AcceptedLeads />
        </TabsContent>
      </div>
    </Tabs>
  );
}
