import { z } from "zod"

export const inputParamsSchema = {
  "equipClassId": z.string().uuid().describe("The unique identifier of the Equipment Class the returned Point Classes must be a child of").optional(),
  "unitTypeId": z.string().uuid().describe("The unique identifier of the Unit Type the returned Point Classes must have").optional(),
  "pointType": z.enum(["boolean","number","multistate - string","multistate - numeric"]).describe("The Point Type the returned Point Classes can be applied to").optional()
}