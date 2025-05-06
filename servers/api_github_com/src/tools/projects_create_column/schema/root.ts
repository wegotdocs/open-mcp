import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "name": z.string().describe("Name of the project column")
}