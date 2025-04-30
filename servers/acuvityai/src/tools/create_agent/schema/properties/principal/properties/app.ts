import { z } from "zod"

export const inputParamsSchema = {
  "component": z.string().describe("The component of the application request.").optional(),
  "labels": z.array(z.string()).describe("The list of labels attached to an application request.").optional(),
  "name": z.string().describe("The name of the application.").optional()
}