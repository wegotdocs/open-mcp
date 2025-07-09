import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results").optional(),
  "end_date": z.string().date().describe("Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.").optional(),
  "updated_from": z.string().describe("Datetime from when the queried periods have been updated. It is inclusive, so the day specified as updated_from will also be considered on the results.").optional(),
  "updated_to": z.string().describe("Datetime until when the queried periods have been updated. It is inclusive, so the day specified as updated_to will also be considered on the results.").optional(),
  "employees": z.array(z.number().int()).describe("A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.").optional(),
  "limit": z.number().int().gte(1).describe("Pagination attribute to limit how many attendances will be returned per page").optional(),
  "offset": z.number().int().gte(0).describe("Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.").optional()
}