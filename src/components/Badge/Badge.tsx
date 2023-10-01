interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <div
      id="accountant"
      className="p-2 py-1 bg-badge-color w-fit rounded-md text-sm"
    >
      {label}
    </div>
  );
}
