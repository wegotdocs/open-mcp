import { z } from "zod"

export const inputParamsSchema = {
  "active": z.number().int().describe("Filter only on `0` = non-active or `1` = active entities in the response").optional(),
  "department_id": z.number().int().describe("A department ID to filter the response on").optional(),
  "email": z.string().describe("An email address to filter the response (exact match, non-case sensitive)").optional(),
  "people_type_id": z.number().int().describe("The people type to filter the response on `1` = Employee, `2` = Contractor, `3` = Placeholder").optional(),
  "employee_type_id": z.number().int().describe("The employee type to filter the response on `1` = Full time, `0` = Part time").optional(),
  "tag_name": z.string().describe("Case-insensitive, URL encoded, exact text match of tag names to filter the response on. Comma-delimited values will return all matching records.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "sort": z.string().describe("A field to sort the list values in the response, ascending (default), pre-fix `-` to apply descending. (Limited fields, varies per endpoint)").optional(),
  "modified_since": z.string().describe("Datetime in either `YYYY-MM-DD hh:mm:ss` or as a Unix timestamp in seconds to filter on all records with an equal or later `modified` timestamp").optional(),
  "fields": z.array(z.string()).describe("Comma-delimited set of fields to include in the response").optional(),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `account`,  `managers`, and `contracts`").optional()
}