import { z } from "zod"

export const inputParamsSchema = {
  "gid": z.string().describe("Globally unique identifier of the resource, as a string.").readonly().optional(),
  "resource_type": z.string().describe("The base type of this resource.").readonly().optional(),
  "name": z.string().describe("Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.").optional()
}