import { z } from "zod"

export const inputParams = {
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "sort": z.string().describe("The field to sort by.").optional(),
  "sort_direction": z.string().describe("The direction to sort by. Possible values are `asc` or `desc`.").optional(),
  "name": z.string().describe("The access key's name.").optional(),
  "bucket": z.string().describe("The bucket's name.").optional(),
  "permission": z.string().describe("The permission of the access key. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string.").optional()
}