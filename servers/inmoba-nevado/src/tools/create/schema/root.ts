import { z } from "zod"

export const inputParamsSchema = {
  "source": z.string().url(),
  "name": z.string().nullable().optional(),
  "email": z.string().email().nullable().optional(),
  "phone": z.string().nullable().optional(),
  "remoteIp": z.string().nullable().optional(),
  "comments": z.string().nullable().optional(),
  "properties": z.array(z.string().nullable()).nullable().optional(),
  "contact": z.number().int().nullable().describe("If contact is setted, the web-lead will be archived and assigned to the contact").optional()
}