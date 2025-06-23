import { z } from "zod"

export const inputParamsSchema = {
  "categoryFilter": z.string().describe("The filter string to match categories. Categories are delimited by / if they are hierarchical. The filter supports globs."),
  "connectionFilter": z.string().describe("The filter string to match connection names. Connection names are delimited by / if they are hierarchical. The filter supports globs."),
  "typeFilter": z.string().describe("The filter string to connection types. Every unique type of connection like SSH or docker has its own type identifier that you can match. The filter supports globs.")
}