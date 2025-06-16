import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.string().nullable().describe("Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent."),
  "path": z.string().describe("HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead."),
  "response": z.string().describe("String that must be contained in HTTP response in order to pass the health check").optional(),
  "status_codes": z.array(z.string()).describe("List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones.").optional(),
  "tls": z.boolean().describe("Use HTTPS for health check").optional()
}