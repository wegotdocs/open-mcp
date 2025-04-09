import { z } from "zod"

export const inputParams = {
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
}