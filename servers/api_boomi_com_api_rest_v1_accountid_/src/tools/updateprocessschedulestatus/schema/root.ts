import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "atomId": z.string().describe("A unique ID assigned by the system to the Runtime.").optional(),
  "enabled": z.boolean().describe("If set to true, the schedules are in effect. Setting it to falsestops the schedules.").optional(),
  "b_id": z.string().describe("The object’s conceptual ID, which is synthesized from the process and Runtime IDs.").optional(),
  "processId": z.string().describe("A unique ID assigned by the system to the process.").optional()
}