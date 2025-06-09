import { z } from "zod"

export const inputParamsSchema = {
  "payload": z.array(z.array(z.any())).describe("Payload containing user input text for translaiton"),
  "Authorization": z.string().describe("Bearer User Auth Token")
}