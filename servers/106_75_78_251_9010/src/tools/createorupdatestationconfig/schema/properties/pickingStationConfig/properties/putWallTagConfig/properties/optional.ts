import { z } from "zod"

export const inputParamsSchema = {
  "color": z.enum(["RED","GREEN","BLUE","YELLOW","PINK","CYAN","WHITE","GRAY"]).optional(),
  "mode": z.enum(["ON","OFF","FLASH"]).optional(),
  "updown": z.enum(["UNTAPABLE","TAPABLE"]).optional()
}