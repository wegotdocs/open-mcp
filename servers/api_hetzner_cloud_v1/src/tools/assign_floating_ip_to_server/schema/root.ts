import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Floating IP."),
  "server": z.number().int().nullable().describe("[Server](#servers) the [Floating IP](#floating-ips) is assigned to.\n\n`null` if not assigned.\n")
}