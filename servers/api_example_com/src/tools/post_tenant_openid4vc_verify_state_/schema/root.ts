import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("Tenant ID"),
  "state": z.string().describe("State, i.e. session ID, identifying the presentation session, this response belongs to.")
}