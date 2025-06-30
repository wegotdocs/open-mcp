import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().describe("The URL of the web page to extract content from"),
  "X-Return-Format": z.enum(["default","markdown","html","text","screenshot","pageshot"]).describe("Specifies the return format of the extracted content").optional(),
  "X-Target-Selector": z.string().describe("CSS selector to target specific elements").optional(),
  "X-Timeout": z.number().int().describe("Timeout in seconds for the request").optional(),
  "X-Wait-For-Selector": z.string().describe("CSS selector to wait for before processing the page").optional()
}