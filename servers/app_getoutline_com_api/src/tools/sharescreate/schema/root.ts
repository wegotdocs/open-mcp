import { z } from "zod"

export const inputParamsSchema = {
  "documentId": z.string().uuid()
}