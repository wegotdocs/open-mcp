import { z } from "zod"

export const inputParams = {
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
}