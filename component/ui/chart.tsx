import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { Bar, BarChart, Line, LineChart, Pie, PieChart } from "recharts"

import { cn } from "@/lib/utils"

// This is a placeholder for chart components
// You can extend this with more chart types as needed

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
))
ChartContainer.displayName = "ChartContainer"

export {
  ChartContainer,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
}
