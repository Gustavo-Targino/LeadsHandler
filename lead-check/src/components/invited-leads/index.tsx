import { useGetPendingLeads } from "@/hooks/queries/use-get-pending-leads";
import { CardLeads } from "../card-leads";
import { Empty } from "../empty";
import { Spin } from "../spin";
import { ErrorAlert } from "../error";
import { Card, CardContent } from "../ui/card";

export function InvitedLeads() {
  const {
    data: invitedLeads,
    isLoading: isLoadingInvitedLeads,
    isError: isErrorInvitedLeads,
  } = useGetPendingLeads();

  const emptyList = invitedLeads?.length === 0;

  if (isLoadingInvitedLeads) {
    return <Spin />;
  }

  if (isErrorInvitedLeads) {
    return <ErrorAlert />;
  }

  if (emptyList) {
    return (
      <Card>
        <CardContent>
          <Empty />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {invitedLeads?.map((lead) => (
        <CardLeads key={lead.id} lead={lead} acceptedLead={false} />
      ))}
    </>
  );
}
