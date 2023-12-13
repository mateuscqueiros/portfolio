import { IconMapPinFilled } from "@tabler/icons-react";
import { IconProps } from "../icon.types";

export function IconPin({ color, size }: IconProps) {
  return (
    <IconMapPinFilled color={color} size={size} className="text-inherit" />
  );
}
