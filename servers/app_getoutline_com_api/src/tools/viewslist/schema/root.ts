import { z } from "zod"

export const inputParamsSchema = {
  "documentId": z.string().uuid().describe("The document ID to retrieve views for")
}