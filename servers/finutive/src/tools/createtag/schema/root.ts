import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Initiative ID"),
  "name": z.string(),
  "id": z.string().optional(),
  "color": z.enum(["WHITE","RED","BLUE","GREEN","YELLOW","ORANGE","PURPLE","AQUA"])
}