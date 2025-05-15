import { z } from "zod"

export const inputParamsSchema = {
  "policies": z.array(z.object({ "arguments": z.array(z.object({ "value": z.string().describe("An argument value in a Java runtime permission.") })).optional(), "privilegeType": z.string().describe("A valid Java runtime permission.") })).optional()
}