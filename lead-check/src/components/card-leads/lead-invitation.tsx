function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

interface LeadInvitationProps {
  price: number;
}

export function LeadInvitation({ price }: LeadInvitationProps) {
  return (
    <p className="text-sm">
      <span className="font-semibold">{formatCurrency(price)} </span>
      <span className="text-muted-foreground">Lead Invitation</span>
    </p>
  );
}
