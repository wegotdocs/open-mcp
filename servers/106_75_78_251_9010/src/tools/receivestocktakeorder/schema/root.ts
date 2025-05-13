import { z } from "zod"

export const inputParamsSchema = {
  "stocktakeTaskIds": z.array(z.number().int()),
  "workStationId": z.number().int().optional()
}