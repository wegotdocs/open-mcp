import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The ID of the version to be moved."),
  "after": z.string().url().describe("The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.").optional(),
  "position": z.enum(["Earlier","Later","First","Last"]).describe("An absolute position in which to place the moved version. Cannot be used with `after`.").optional()
}