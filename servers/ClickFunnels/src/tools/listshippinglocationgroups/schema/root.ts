import { z } from "zod"

export const inputParamsSchema = {
  "profile_id": z.number().int(),
  "after": z.string().describe("ID of item after which the collection should be returned. More examples and info about pagination [in our guides](https://developers.myclickfunnels.com/docs/pagination).").optional(),
  "sort_order": z.enum(["asc","desc"]).describe("Sort order of a list response. Use 'desc' to reverse the default 'asc' (ascending) sort order. Examples [in our guides](https://developers.myclickfunnels.com/docs/pagination).").optional(),
  "sort_property": z.enum(["id","updated_at"]).describe("Sort property of a list response. The default is id and thus the created_at order.\nIf you sort by other properties, we additionally sort by id implicitly as a secondary sort property, so that you can rely on the sort order to be deterministic even if the main sort property ends up with the same values.\n").optional()
}