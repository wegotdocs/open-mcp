import { z } from "zod"

export const inputParamsSchema = {
  "uiModificationId": z.string().describe("The ID of the UI modification.")
}