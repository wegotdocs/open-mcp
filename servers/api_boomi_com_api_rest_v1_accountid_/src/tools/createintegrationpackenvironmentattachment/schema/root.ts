import { z } from "zod"

export const inputParamsSchema = {
  "environmentId": z.string().describe("A unique ID assigned by the system to the environment.").optional(),
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the environment and integration pack instance IDs.").optional(),
  "integrationPackInstanceId": z.string().describe("A unique ID assigned by the system to the integration pack instance.").optional()
}