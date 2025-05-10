import { z } from "zod"

export const inputParamsSchema = {
  "nodeType": z.enum(["SITE","EQUIP","POINT"]).describe("The node (entity) type the returned Refs can be applied to").optional(),
  "classId": z.string().describe("The unique identifier of the Point or Equip Class the returned Refs must be associated with. Set to `\"NONE\"` to retrieve Refs that are not associated with any class.").optional()
}