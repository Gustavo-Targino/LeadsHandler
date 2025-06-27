import { Mail, type LucideProps } from "lucide-react";

interface CardContactInfoProps {
  info: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export function CardContactInfo({
  info,
  icon: Icon = Mail,
}: CardContactInfoProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={14} />
      <span className="text-primary"> {info}</span>
    </div>
  );
}
