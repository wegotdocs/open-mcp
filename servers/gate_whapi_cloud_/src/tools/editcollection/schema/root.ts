import { z } from "zod"

export const inputParamsSchema = {
  "CollectionID": z.string().describe("CollectionID"),
  "name": z.string().describe("Collection name").optional(),
  "remove_products": z.array(z.string().regex(new RegExp("^([\\d]{10,18})?$")).describe("Product ID")).describe("List of product's ids").optional(),
  "add_products": z.array(z.string().regex(new RegExp("^([\\d]{10,18})?$")).describe("Product ID")).describe("List of product's ids").optional()
}