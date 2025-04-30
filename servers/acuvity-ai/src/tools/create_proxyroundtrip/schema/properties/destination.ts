import { z } from "zod"

export const inputParamsSchema = {
  "app": z.string().describe("The name of the application that the domain belongs to.").optional(),
  "component": z.string().describe("The component of the application that the domain belongs to.").optional(),
  "host": z.string().describe("The host name of the request."),
  "ip": z.string().describe("The destination IP address of the request.").optional(),
  "labels": z.array(z.string()).describe("The list of labels attached to the application request destination.").optional()
}