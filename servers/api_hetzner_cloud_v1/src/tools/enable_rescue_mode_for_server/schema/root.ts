import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "ssh_keys": z.array(z.number().int()).describe("Array of SSH key IDs which should be injected into the rescue system.").optional(),
  "type": z.literal("linux64").describe("Type of rescue system to boot.").optional()
}