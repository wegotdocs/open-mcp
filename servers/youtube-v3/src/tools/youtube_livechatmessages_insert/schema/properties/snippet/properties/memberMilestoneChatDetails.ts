import { z } from "zod"

export const inputParamsSchema = {
  "memberLevelName": z.string().describe("The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.").optional(),
  "memberMonth": z.number().int().describe("The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.").optional(),
  "userComment": z.string().describe("The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member.").optional()
}