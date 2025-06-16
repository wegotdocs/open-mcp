import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Volume."),
  "automount": z.boolean().describe("Auto-mount the Volume after attaching it").optional(),
  "server": z.number().int().describe("ID of the Server the Volume will be attached to")
}