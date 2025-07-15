import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("The project's ID")
}