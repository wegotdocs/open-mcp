import { z } from "zod"

export const inputParamsSchema = {
  "isDismissible": z.boolean().describe("Flag indicating if the announcement banner can be dismissed by the user.").optional(),
  "isEnabled": z.boolean().describe("Flag indicating if the announcement banner is enabled or not.").optional(),
  "message": z.string().describe("The text on the announcement banner.").optional(),
  "visibility": z.string().describe("Visibility of the announcement banner. Can be public or private.").optional()
}