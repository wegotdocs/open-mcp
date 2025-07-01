import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique payment identifier in Asaas"),
  "documentId": z.string().describe("Unique document identifier")
}