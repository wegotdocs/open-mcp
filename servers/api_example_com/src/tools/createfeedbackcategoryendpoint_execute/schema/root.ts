import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the feedback category"),
  "clientId": z.string().describe("Client ID")
}