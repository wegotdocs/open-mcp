import { z } from "zod"

export const inputParamsSchema = {
  "timeout": z.number().describe("Timeout in seconds for each request").optional(),
  "protocols": z.string().describe("Comma-separated list of protocols to try").optional(),
  "paths": z.string().describe("Comma-separated list of paths to try").optional(),
  "check_dns_only": z.boolean().describe("Only check DNS resolution, don't make HTTP requests").optional()
}