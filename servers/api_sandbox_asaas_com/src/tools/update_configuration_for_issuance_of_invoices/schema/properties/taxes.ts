import { z } from "zod"

export const inputParamsSchema = {
  "retainIss": z.boolean().describe("The invoice holder must withhold ISS or not"),
  "cofins": z.number().describe("COFINS rate"),
  "csll": z.number().describe("CSLL rate"),
  "inss": z.number().describe("INSS rate"),
  "ir": z.number().describe("IR rate"),
  "pis": z.number().describe("PIS rate"),
  "iss": z.number().describe("ISS rate")
}