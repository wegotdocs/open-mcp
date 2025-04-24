import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().describe("The ID of the project."),
  "name": z.string().describe("The updated name of the project, this name appears in reports.")
}