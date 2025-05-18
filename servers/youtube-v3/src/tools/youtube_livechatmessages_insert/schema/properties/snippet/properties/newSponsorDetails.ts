import { z } from "zod"

export const inputParamsSchema = {
  "isUpgrade": z.boolean().describe("If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false.").optional(),
  "memberLevelName": z.string().describe("The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.").optional()
}