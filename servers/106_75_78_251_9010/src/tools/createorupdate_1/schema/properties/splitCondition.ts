import { z } from "zod"

export const inputParamsSchema = {
  "splitType": z.enum(["QUANTITY_LIMIT","VOLUME_LIMIT","WEIGHT_LIMIT","SKU_KIND_LIMIT"]),
  "threshold": z.number()
}