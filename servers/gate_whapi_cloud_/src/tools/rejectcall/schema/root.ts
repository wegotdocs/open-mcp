import { z } from "zod"

export const inputParamsSchema = {
  "CallID": z.string().describe("Call ID"),
  "callFrom": z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")
}