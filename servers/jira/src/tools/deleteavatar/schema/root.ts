import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "owningObjectId": z.string().describe("The ID of the item the avatar is associated with."),
  "id": z.number().int().describe("The ID of the avatar.")
}