import { z } from "zod"

export const inputParamsSchema = {
  "postId": z.string().uuid(),
  "after": z.string().nullable().describe("Returns the comments which have `created_at` value after the `after` value. The full ISO 8601 must be used e.g. `2021-12-20T10:33:52Z`. The `after` parameter is inclusive.").optional(),
  "before": z.string().nullable().describe("Returns the comments which have `created_at` value before the `before` value. The full ISO 8601 must be used e.g. `2021-12-20T10:33:52Z`. The `before`parameter is exclusive.").optional(),
  "limit": z.number().int().lte(1000).nullable().describe("Limits the count of the comments in response to the parameter value.").optional(),
  "cursor": z.string().nullable().describe("Cursor from an already made call for pagination. The cursor is encoded and must only be used if retrieved from a previous call from this API. It should not be changed in any way.\nIF THE CURSOR IS SET IT WILL OVERWRITE ALL OTHER QUERY PARAMETERS.").optional()
}