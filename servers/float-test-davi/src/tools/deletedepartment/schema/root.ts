import { z } from "zod"

export const inputParamsSchema = {
  "department_id": z.number().int().describe("department id to delete")
}