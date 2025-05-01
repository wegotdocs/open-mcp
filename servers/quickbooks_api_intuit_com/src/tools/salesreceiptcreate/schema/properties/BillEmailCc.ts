import { z } from "zod"

export const inputParamsSchema = {
  "Address": z.string().describe("An email address. The address format must follow the RFC 822 standard.").optional()
}