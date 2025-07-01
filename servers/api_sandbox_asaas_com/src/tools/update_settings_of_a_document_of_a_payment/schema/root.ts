import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique payment identifier in Asaas"),
  "documentId": z.string().describe("Unique document identifier"),
  "availableAfterPayment": z.boolean().describe("true to make the file available only after receipt of the payment"),
  "type": z.enum(["INVOICE","CONTRACT","MEDIA","DOCUMENT","SPREADSHEET","PROGRAM","OTHER"]).describe("Document type")
}