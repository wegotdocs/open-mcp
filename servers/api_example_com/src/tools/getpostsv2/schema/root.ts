import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().regex(new RegExp("^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(\\.\\d+)?(([+-]\\d\\d:\\d\\d)|Z)?$")).nullable().describe("Returns the posts which have `created_at`, `published_at`, `updated_at` or `deleted_at` value after the `after` value. The full ISO 8601 must be used e.g. `2021-12-20T10:33:52Z`. The `after` parameter is inclusive.").optional(),
  "before": z.string().regex(new RegExp("^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(\\.\\d+)?(([+-]\\d\\d:\\d\\d)|Z)?$")).nullable().describe("Returns the posts which have `created_at`, `published_at`, `updated_at` or `deleted_at` value before the `before` value. The full ISO 8601 must be used e.g. `2021-12-20T10:33:52Z`. The `before` parameter is exclusive.").optional(),
  "limit": z.number().int().lte(1000).nullable().describe("Limits the count of the posts in response to the parameter value. Maximum is 1000.").optional(),
  "cursor": z.string().nullable().describe("Cursor from an already made call for pagination. The cursor is encoded and must only be used if retrieved from a previous call from this API. It should not be changed in any way.\nIF THE CURSOR IS SET IT WILL OVERWRITE ALL OTHER QUERY PARAMETERS.").optional(),
  "external_post_id": z.string().nullable().describe("Returns posts that have this `external_post_id`.").optional(),
  "published_status": z.string().nullable().describe("Filter search results by post publishing status. There are 3 options: `ONLY_PUBLISHED` (default), `ONLY_SCHEDULED` and `ALL`.").optional(),
  "post_status": z.string().nullable().describe("Filter search results by post status. There are 5 options: `ONLY_CREATED`, `ONLY_UPDATED`, `ONLY_CREATED_OR_UPDATED` (default), `ONLY_DELETED` and `ALL`.").optional(),
  "group_id": z.array(z.string()).nullable().describe("Returns posts that are in a group with this `group_id`. This query parameter can be repeated to include more groups.").optional()
}