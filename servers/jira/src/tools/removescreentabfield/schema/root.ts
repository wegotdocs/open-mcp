import { z } from "zod"

export const inputParams = {
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "id": z.string().describe("The ID of the field.")
}