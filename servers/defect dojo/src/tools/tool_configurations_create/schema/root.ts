import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(200),
  "description": z.string().max(2000).nullable().optional(),
  "url": z.string().max(2000).nullable().optional(),
  "authentication_type": z.union([z.literal("API"), z.literal("Password"), z.literal("SSH"), z.literal(""), z.literal(null)]).nullable().describe("* `API` - API Key\n* `Password` - Username/Password\n* `SSH` - SSH").optional(),
  "extras": z.string().max(255).nullable().describe("Additional definitions that will be consumed by scanner").optional(),
  "username": z.string().max(200).nullable().optional(),
  "password": z.string().max(600).nullable().optional(),
  "auth_title": z.string().max(200).nullable().optional(),
  "ssh": z.string().max(6000).nullable().optional(),
  "api_key": z.string().max(600).nullable().optional(),
  "tool_type": z.number().int()
}