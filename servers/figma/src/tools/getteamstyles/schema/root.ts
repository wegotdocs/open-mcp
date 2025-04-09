import { z } from "zod"

export const inputParams = {
  "team_id": z.string().describe("Id of the team to list styles from."),
  "page_size": z.number().describe("Number of items to return in a paged list of results. Defaults to 30.").optional(),
  "after": z.number().describe("Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional(),
  "before": z.number().describe("Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional()
}