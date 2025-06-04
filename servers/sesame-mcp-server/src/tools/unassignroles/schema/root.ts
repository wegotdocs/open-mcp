import { z } from "zod"

export const inputParamsSchema = {
  "assignationId": z.string().uuid().describe("Role Id")
}