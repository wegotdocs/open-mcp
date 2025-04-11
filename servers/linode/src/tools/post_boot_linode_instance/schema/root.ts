import { z } from "zod"

export const inputParams = {
  "config_id": z.number().int().nullable().describe("The Linode Config ID to boot into.").optional()
}