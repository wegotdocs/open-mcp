import { z } from "zod"

export const inputParamsSchema = {
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
}