interface BadgeProps {
  label: string;
}

export function BlogBadge({ label }: BadgeProps) {
  return (
    <div
      id="accountant"
      className="p-2 py-1 bg-badge-bg-color w-fit rounded-md"
    >
      <span className="text-badge-color text-sm"></span>
    </div>
  );
}
