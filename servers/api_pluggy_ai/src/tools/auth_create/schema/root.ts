import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().uuid().describe("Client id"),
  "clientSecret": z.string().describe("Client secret")
}