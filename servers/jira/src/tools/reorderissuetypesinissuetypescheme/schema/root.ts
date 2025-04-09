import { z } from "zod"

export const inputParams = {
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "after": z.string().describe("The ID of the issue type to place the moved issue types after. Required if `position` isn't provided.").optional(),
  "issueTypeIds": z.array(z.string()).describe("A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move."),
  "position": z.enum(["First","Last"]).describe("The position the issue types should be moved to. Required if `after` isn't provided.").optional()
}