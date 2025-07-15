import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("A project ID to filter the response on").optional(),
  "billable": z.number().int().describe("Filter response on `1` = billable or `0` = non-billable entities").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional()
}