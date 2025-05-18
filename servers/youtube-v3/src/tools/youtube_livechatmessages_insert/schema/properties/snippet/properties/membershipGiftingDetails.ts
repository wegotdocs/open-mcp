import { z } from "zod"

export const inputParamsSchema = {
  "giftMembershipsCount": z.number().int().describe("The number of gift memberships purchased by the user.").optional(),
  "giftMembershipsLevelName": z.string().describe("The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.").optional()
}