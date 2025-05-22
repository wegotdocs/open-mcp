import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "do_not_disturb": z.boolean().nullable().describe("Determines if DND is ON or OFF."),
  "group_id": z.number().int().nullable().describe("The ID of the group which the user's DND status will be updated for.").optional(),
  "group_type": z.enum(["callcenter","department","office"]).nullable().describe("The type of the group which the user's DND status will be updated for.").optional()
}