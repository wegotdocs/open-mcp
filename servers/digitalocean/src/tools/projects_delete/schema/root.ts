import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().uuid().describe("A unique identifier for a project.")
}