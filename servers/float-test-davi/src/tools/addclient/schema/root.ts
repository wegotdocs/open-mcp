import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.number().int().describe("The ID of this client").readonly().optional(),
  "name": z.string().max(200).describe("The name of the client")
}