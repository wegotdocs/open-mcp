import { z } from "zod"

export const inputParamsSchema = {
  "department_id": z.number().int().describe("The ID of this department").readonly().optional(),
  "parent_id": z.number().int().describe("The ID of this department's parent department (identifies this as a sub-department if not `null`)").optional(),
  "name": z.string().max(200).describe("The name of the department")
}