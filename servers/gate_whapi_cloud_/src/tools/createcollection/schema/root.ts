import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Collection name"),
  "products": z.array(z.string().regex(new RegExp("^([\\d]{10,18})?$")).describe("Product ID")).describe("Collection's Products")
}