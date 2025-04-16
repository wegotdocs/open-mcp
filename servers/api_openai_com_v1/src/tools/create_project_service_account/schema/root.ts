import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().describe("The ID of the project."),
  "name": z.string().describe("The name of the service account being created.")
}