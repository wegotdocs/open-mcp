import { z } from "zod"

export const inputParamsSchema = {
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "pos": z.number().int().describe("The position of tab. The base index is 0.")
}