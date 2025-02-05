import { JSX } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
    children: JSX.Element;
    data: string;
}

export function TooltipInfo({children, data} : Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{data}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
