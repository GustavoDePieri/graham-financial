import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Handshake,
  DollarSign,
  Users,
  Stethoscope,
  Pill,
  HeartPulse,
  FileText,
  Star,
  MapPin,
  Mail,
  Clock,
  Check,
  Calendar,
  Award,
  type LucideIcon,
} from "lucide-react";
import type { LucideIconName } from "@/lib/content";

const map: Record<LucideIconName, LucideIcon> = {
  phone: Phone,
  "arrow-right": ArrowRight,
  "shield-check": ShieldCheck,
  handshake: Handshake,
  "dollar-sign": DollarSign,
  users: Users,
  stethoscope: Stethoscope,
  pill: Pill,
  "heart-pulse": HeartPulse,
  "file-text": FileText,
  star: Star,
  "map-pin": MapPin,
  mail: Mail,
  clock: Clock,
  check: Check,
  calendar: Calendar,
  award: Award,
};

export function Icon({
  name,
  className,
  strokeWidth,
  "aria-hidden": ariaHidden = true,
}: {
  name: LucideIconName;
  className?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}) {
  const Component = map[name];
  return (
    <Component
      className={className}
      strokeWidth={strokeWidth ?? 1.75}
      aria-hidden={ariaHidden}
    />
  );
}
