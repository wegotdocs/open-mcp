import { z } from "zod"

export const inputParamsSchema = {
  "communityGuidelinesGoodStanding": z.boolean().describe("Whether or not the channel respects the community guidelines.").optional(),
  "contentIdClaimsGoodStanding": z.boolean().describe("Whether or not the channel has any unresolved claims.").optional(),
  "copyrightStrikesGoodStanding": z.boolean().describe("Whether or not the channel has any copyright strikes.").optional()
}