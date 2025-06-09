import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "products": z.array(z.object({ "account_id": z.number().int(), "barcode": z.string(), "product_name": z.string(), "coefficient": z.number().int().optional() }))
}