import { CardLeads } from "../card-leads";
import { Empty } from "../empty";
import { Spin } from "../spin";
import { ErrorAlert } from "../error";
import { useGetAcceptedLeads } from "@/hooks/queries/use-get-accepted-leads";

export function AcceptedLeads() {
  const {
    data: acceptedLeads,
    isLoading: isLoadingAcceptedLeads,
    isError: isErrorAcceptedLeads,
  } = useGetAcceptedLeads();

  const emptyList = acceptedLeads?.length === 0;

  if (isLoadingAcceptedLeads) {
    return <Spin />;
  }

  if (isErrorAcceptedLeads) {
    return <ErrorAlert />;
  }

  if (emptyList) {
    return (
      <Empty
        title="No accepted Leads yet"
        description="Once you accepted leads, they'll show up here."
      />
    );
  }

  return (
    <>
      {acceptedLeads?.map((lead) => (
        <CardLeads key={lead.id} lead={lead} acceptedLead />
      ))}
    </>
  );
}
