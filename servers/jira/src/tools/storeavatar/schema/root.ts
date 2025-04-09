import { z } from "zod"

export const inputParams = {
  "type": z.enum(["project","issuetype","priority"]).describe("The avatar type."),
  "entityId": z.string().describe("The ID of the item the avatar is associated with."),
  "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
  "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
  "size": z.number().int().describe("The length of each side of the crop region.")
}