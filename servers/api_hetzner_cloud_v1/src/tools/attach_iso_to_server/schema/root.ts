import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "iso": z.string().describe("ID or name of ISO to attach to the Server as listed in GET `/isos`")
}