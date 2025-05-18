import { z } from "zod"

export const inputParamsSchema = {
  "contentOwner": z.string().describe("The ID of the content owner linked to the channel.").optional(),
  "timeLinked": z.string().datetime({ offset: true }).describe("The date and time when the channel was linked to the content owner.").optional()
}