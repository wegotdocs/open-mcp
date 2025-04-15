import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "entityId": z.string().describe("The ID of the item the avatar is associated with.")
}