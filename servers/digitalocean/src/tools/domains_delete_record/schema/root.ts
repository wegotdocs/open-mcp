import { z } from "zod"

export const inputParamsSchema = {
  "domain_name": z.string().describe("The name of the domain itself."),
  "domain_record_id": z.number().int().describe("The unique identifier of the domain record.")
}