import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "menus": z.string().optional(),
  "roleId": z.number().int().optional()
}