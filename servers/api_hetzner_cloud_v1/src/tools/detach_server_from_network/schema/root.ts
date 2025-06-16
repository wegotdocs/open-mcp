import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "network": z.number().int().describe("ID of an existing network to detach the Server from")
}