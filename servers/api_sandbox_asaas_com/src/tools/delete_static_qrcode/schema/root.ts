import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Identifier of the QR Code that will be deleted.")
}