import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name to display in the signature"),
  "role": z.string().describe("Professional role or position"),
  "calendly": z.string().describe("Calendly meeting booking link").optional(),
  "phone": z.string().describe("Contact phone number").optional(),
  "service": z.string().describe("Service or department name").optional()
}