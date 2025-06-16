import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "placement_group": z.number().int().describe("ID of Placement Group the Server should be added to")
}