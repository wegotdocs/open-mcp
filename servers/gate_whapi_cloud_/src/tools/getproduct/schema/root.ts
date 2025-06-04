import { z } from "zod"

export const inputParamsSchema = {
  "ProductID": z.string().regex(new RegExp("^([\\d]{10,18})?$")).describe("Product ID")
}