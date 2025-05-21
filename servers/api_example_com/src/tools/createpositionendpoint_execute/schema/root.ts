import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Position name"),
  "clientId": z.string().describe("Client ID")
}