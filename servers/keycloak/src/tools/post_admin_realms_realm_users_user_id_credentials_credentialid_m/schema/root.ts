import { z } from "zod"

export const inputParamsSchema = {
  "credentialId": z.string().describe("The credential to move")
}