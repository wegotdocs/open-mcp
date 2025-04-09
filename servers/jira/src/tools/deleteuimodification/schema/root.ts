import { z } from "zod"

export const inputParams = {
  "uiModificationId": z.string().describe("The ID of the UI modification.")
}