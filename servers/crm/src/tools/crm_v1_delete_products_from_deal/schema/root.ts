import { z } from "zod"

export const inputParamsSchema = {
  "deal_products": z.array(z.object({ "id": z.string().optional() })).optional()
}