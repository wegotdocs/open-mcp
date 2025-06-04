import { z } from "zod"

export const inputParamsSchema = {
  "MessageID": z.string().regex(new RegExp("^[A-Za-z0-9._]{4,23}-[A-Za-z0-9._]{4,14}(-[A-Za-z0-9._]{4,10})?(-[A-Za-z0-9._]{4,10})?$")).describe("Message ID"),
  "contacts": z.array(z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")).describe("List of contacts to send the story to").optional(),
  "exclude_contacts": z.array(z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")).describe("List of contacts to exclude").optional()
}