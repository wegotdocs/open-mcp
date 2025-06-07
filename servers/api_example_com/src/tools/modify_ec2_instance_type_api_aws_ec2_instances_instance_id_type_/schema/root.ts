import { z } from "zod"

export const inputParamsSchema = {
  "instance_id": z.string(),
  "new_type": z.string().describe("New instance type (e.g., m5.large)")
}