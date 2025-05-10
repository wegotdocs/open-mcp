import { z } from "zod"

export const inputParamsSchema = {
  "ip_address": z.string().nullable().describe("The IP address of the device that initiated the transaction").optional(),
  "user_agent": z.string().nullable().describe("The user agent of the device that initiated the transaction (e.g. \"Mozilla/5.0\")").optional()
}