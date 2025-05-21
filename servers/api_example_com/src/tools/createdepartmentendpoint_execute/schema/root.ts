import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Department name"),
  "clientId": z.string().describe("Client ID")
}