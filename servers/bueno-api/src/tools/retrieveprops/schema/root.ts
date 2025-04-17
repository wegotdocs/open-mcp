import { z } from "zod"

export const inputParamsSchema = {
  "nodeType": z.enum(["SITE","EQUIP","POINT"]).describe("The node (entity) type the returned Props can be applied to").optional(),
  "propType": z.enum(["HOUR","DATE","NUMBER","JSON","STRING","LIST","TIMESTAMP","FUNCTION"]).describe("The type of the Prop returned").optional(),
  "unitTypeId": z.string().uuid().describe("The unique identifier of the Unit Type the returned Props must have").optional(),
  "classId": z.string().describe("The unique identifier of the Point or Equip Class the returned Props must be associated with. Set to `\"NONE\"` to retrieve Props that are not associated with any class.").optional()
}