import { z } from "zod"

export const inputParamsSchema = {
  "certificates": z.array(z.number().int()).describe("IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is `http`.").optional(),
  "cookie_lifetime": z.number().int().describe("Lifetime of the cookie used for sticky sessions (in seconds).").optional(),
  "cookie_name": z.string().describe("Name of the cookie used for sticky sessions.").optional(),
  "redirect_http": z.boolean().describe("Redirect HTTP requests to HTTPS. Only available if `protocol` is `https`.").optional(),
  "sticky_sessions": z.boolean().describe("Use sticky sessions. Only available if `protocol` is `http` or `https`.").optional()
}