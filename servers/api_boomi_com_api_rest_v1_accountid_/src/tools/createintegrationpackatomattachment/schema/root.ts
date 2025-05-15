import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().describe("A unique ID assigned by the system to the Runtime.").optional(),
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the Runtime and integration pack instance IDs.").optional(),
  "integrationPackInstanceId": z.string().describe("A unique ID assigned by the system to the integration pack instance.").optional()
}