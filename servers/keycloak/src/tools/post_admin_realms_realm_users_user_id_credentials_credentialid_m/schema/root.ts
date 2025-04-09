import { z } from "zod"

export const inputParams = {
  "credentialId": z.string().describe("The credential to move")
}