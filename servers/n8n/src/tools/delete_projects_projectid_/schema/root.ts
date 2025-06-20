import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string().describe("The ID of the project.")
}