import { z } from "zod"

export const inputParamsSchema = {
  "clientDocumentId": z.number().int()
}