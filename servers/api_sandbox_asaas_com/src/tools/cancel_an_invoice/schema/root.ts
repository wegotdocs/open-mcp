import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique invoice identifier in Asaas"),
  "cancelOnlyOnAsaas": z.boolean().describe("Cancel invoice only on Asaas").optional()
}