import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Tool."),
  "environment_id": z.string().describe("Unique identifier for the Environment to deploy the Version to."),
  "version_id": z.string().describe("Unique identifier for the specific version of the Tool.")
}