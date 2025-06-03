import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.string().describe("List of notification IDs to mark as read")).describe("List of notification IDs to mark as read").optional(),
  "all": z.boolean().describe("Flag to mark all notifications as read").optional()
}