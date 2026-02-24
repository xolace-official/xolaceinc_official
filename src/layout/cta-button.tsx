// components/shared/cta-button.tsx
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {LucideIcon} from "lucide-react";

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export const CTAButton = (
  {
    label,
    href,
    onClick,
    variant = "default",
    icon,
    iconPosition = "right",
    size = "lg",
    className = "",
  }: CTAButtonProps) => {
  const Icon = icon;

  // If button has both href and onClick
  if (href && onClick) {
    return (
      <Button
        asChild
        size={size}
        variant={variant}
        className={`text-base ${className}`}
      >
        <Link href={href} className="flex items-center" onClick={onClick}>
          {Icon && iconPosition === "left" && <Icon className="mr-2 w-4 h-4"/>}
          {label}
          {Icon && iconPosition === "right" && <Icon className="ml-2 w-4 h-4"/>}
        </Link>
      </Button>
    );
  }

  // If button has onClick only
  if (onClick) {
    return (
      <Button
        size={size}
        variant={variant}
        className={`text-base ${className}`}
        onClick={onClick}
      >
        {Icon && iconPosition === "left" && <Icon className="mr-2 w-4 h-4"/>}
        {label}
        {Icon && iconPosition === "right" && <Icon className="ml-2 w-4 h-4"/>}
      </Button>
    );
  }

  // If button has href only
  if (href) {
    return (
      <Button
        asChild
        size={size}
        variant={variant}
        className={`text-base ${className}`}
      >
        <Link href={href} className="flex items-center">
          {Icon && iconPosition === "left" && <Icon className="mr-2 w-4 h-4"/>}
          {label}
          {Icon && iconPosition === "right" && <Icon className="ml-2 w-4 h-4"/>}
        </Link>
      </Button>
    );
  }

  // Fallback: disabled button
  return (
    <Button
      size={size}
      variant={variant}
      className={`text-base ${className}`}
      disabled
    >
      {Icon && iconPosition === "left" && <Icon className="mr-2 w-4 h-4"/>}
      {label}
      {Icon && iconPosition === "right" && <Icon className="ml-2 w-4 h-4"/>}
    </Button>
  );
};