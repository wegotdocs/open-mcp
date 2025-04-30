import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("Tenant ID"),
  "id": z.string().describe("ID of the presentation definition object to retrieve")
}