import { z } from "zod"

export const inputParamsSchema = {
  "paymentLinkId": z.string().describe("Unique identifier for your payments link in Asaas"),
  "imageId": z.string().describe("Unique payment link image identifier in Asaas")
}