import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().regex(new RegExp("^[\\w.@+-]+$")).min(1).max(150).describe("Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."),
  "password": z.string().min(1).max(128),
  "first_name": z.string().max(150).optional(),
  "last_name": z.string().max(150).optional(),
  "email": z.string().email().max(254).optional(),
  "is_staff": z.boolean().describe("Designates whether the user can log into this admin site.").optional(),
  "is_active": z.boolean().describe("Designates whether this user should be treated as active. Unselect this instead of deleting accounts.").optional(),
  "date_joined": z.string().datetime({ offset: true }).optional(),
  "last_login": z.string().datetime({ offset: true }).nullable().optional(),
  "groups": z.array(z.number().int()).optional(),
  "permissions": z.array(z.number().int()).optional()
}