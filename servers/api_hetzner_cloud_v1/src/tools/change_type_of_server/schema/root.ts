import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server."),
  "server_type": z.string().describe("ID or name of Server type the Server should migrate to"),
  "upgrade_disk": z.boolean().describe("If false, do not upgrade the disk (this allows downgrading the Server type later)")
}