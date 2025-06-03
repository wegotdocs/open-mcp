import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the message"),
  "show_deleted_message": z.boolean().describe("Whether to show deleted message").optional()
}