import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().regex(new RegExp("^[\\w.@+-]+$")).min(1).max(150).describe("Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."),
  "first_name": z.string().max(150).optional(),
  "last_name": z.string().max(150).optional(),
  "email": z.string().email().min(1),
  "is_active": z.boolean().describe("Designates whether this user should be treated as active. Unselect this instead of deleting accounts.").optional(),
  "is_superuser": z.boolean().describe("Designates that this user has all permissions without explicitly assigning them.").optional(),
  "password": z.string().min(1).optional(),
  "configuration_permissions": z.array(z.number().int().nullable()).optional()
}