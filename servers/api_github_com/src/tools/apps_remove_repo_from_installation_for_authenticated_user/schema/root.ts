import { z } from "zod"

export const inputParamsSchema = {
  "installation_id": z.number().int().describe("The unique identifier of the installation."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}