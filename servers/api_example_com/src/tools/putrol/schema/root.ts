import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("The identifier of the role to update."),
  "rolName": z.string().nullable().describe("Rol Name").optional()
}