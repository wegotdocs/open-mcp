import { z } from "zod"

export const inputParamsSchema = {
  "gid": z.string().describe("Globally unique identifier of the resource, as a string.").readonly().optional(),
  "resource_type": z.string().describe("The base type of this resource.").readonly().optional(),
  "current_number_value": z.number().describe("*Conditional*. This number is the current value of a goal metric of type number.").optional()
}