import { z } from "zod"

export const inputParamsSchema = {
  "department_id": z.number().int().describe("The department's id")
}