import { z } from "zod"

export const inputParamsSchema = {
  "ip_address": z.string().describe("The IP address of the device being used to initiate the authorization.").optional(),
  "user_agent": z.string().describe("The user agent of the device being used to initiate the authorization.").optional()
}