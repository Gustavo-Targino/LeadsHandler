import { AlertCircleIcon, type LucideProps } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface ErrorProps {
  title?: string;
  description?: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}
const baseTitle = "Something went wrong";

const baseDescription = "We're working to fix it. Please try again shortly.";

export function ErrorAlert({
  icon: Icon = AlertCircleIcon,
  title,
  description,
}: ErrorProps) {
  return (
    <Alert variant="destructive">
      <Icon />
      <AlertTitle>{title ?? baseTitle}</AlertTitle>
      <AlertDescription>{description ?? baseDescription}</AlertDescription>
    </Alert>
  );
}
