import { z } from "zod"

export const inputParamsSchema = {
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
}