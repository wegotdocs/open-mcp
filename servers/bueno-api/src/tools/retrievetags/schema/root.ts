import { z } from "zod"

export const inputParamsSchema = {
  "nodeType": z.enum(["SITE","EQUIP","POINT"]).describe("The node (entity) type the returned Tags can be applied to").optional(),
  "type": z.enum(["CORE","OPTIONAL"]).describe("The type of the Tag returned. `CORE` tags are 'core' to classifying the entity within the Data Model, while `OPTIONAL` tags supply extra information about the classified entity and do not affect the classification").optional(),
  "classId": z.string().describe("The unique identifier of the Point or Equip Class the returned Tags must be associated with. Set to `\"NONE\"` to retrieve Tags that are not associated with any class.").optional()
}