import { z } from "zod"

export const inputParamsSchema = {
  "TradingPartner": z.array(z.object({ "id": z.string().optional() })).optional()
}