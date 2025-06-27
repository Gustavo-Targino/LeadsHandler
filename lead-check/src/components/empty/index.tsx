import { Scroll, type LucideProps } from "lucide-react";

interface EmptyProps {
  title?: string;
  description?: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const baseTitle = "No Leads yet";

const baseDescription = "Once you receive leads, they'll show up here.";

export function Empty({ icon: Icon = Scroll, title, description }: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
      <Icon size={48} className="mb-4" />

      <p className="text-lg font-semibold">{title ?? baseTitle}</p>
      <p className="text-sm text-gray-400 mt-1">
        {description ?? baseDescription}
      </p>
    </div>
  );
}
