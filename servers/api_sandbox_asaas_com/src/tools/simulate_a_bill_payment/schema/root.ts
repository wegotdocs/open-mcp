import { z } from "zod"

export const inputParamsSchema = {
  "identificationField": z.string().describe("Digitizable bill line").optional(),
  "barCode": z.string().describe("Ticket barcode").optional()
}