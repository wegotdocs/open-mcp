import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the key."),
  "keyId": z.string().uuid().describe("ID of the key to delete.")
}