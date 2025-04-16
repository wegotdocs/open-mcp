import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().describe("The ID of the project."),
  "service_account_id": z.string().describe("The ID of the service account.")
}