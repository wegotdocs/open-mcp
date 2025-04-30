import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "passcode": z.string().optional()
}