import { z } from "zod"

export const inputParams = {
  "invoice_uuid": z.string().describe("UUID of the invoice"),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}