import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the credential."),
  "destinationProjectId": z.string().describe("The ID of the project to transfer the credential to.")
}