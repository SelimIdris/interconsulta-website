import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sea text-white hover:bg-sea/80",
        secondary:
          "border-transparent bg-[#F5F8F7] text-textDark hover:bg-[#EBEFEF]",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-600/80",
        outline: "text-textDark border-textDark/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
