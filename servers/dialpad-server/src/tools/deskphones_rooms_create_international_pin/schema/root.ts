import { z } from "zod"

export const inputParamsSchema = {
  "customer_ref": z.string().nullable().describe("[single-line only]\n\nAn identifier to be printed in the usage summary. Typically used for identifying the person who requested the PIN.").optional()
}