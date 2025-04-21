import { z } from "zod"

export const inputParamsSchema = {
  "authorizationToken": z.string().optional(),
  "entityRef": z.string().describe("The reference to a single entity that should be refreshed")
}