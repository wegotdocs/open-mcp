import { z } from "zod"

export const inputParamsSchema = {
  "warehouseAreaIds": z.array(z.number().int()).optional(),
  "warehouseAreaLogicIds": z.array(z.number().int()).optional(),
  "shelfLayers": z.array(z.string()).optional(),
  "locationHots": z.array(z.string()).optional()
}