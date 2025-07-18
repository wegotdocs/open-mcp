import { z } from "zod"

export const inputParamsSchema = {
  "rolName": z.string().nullable().describe("Rol Name").optional()
}