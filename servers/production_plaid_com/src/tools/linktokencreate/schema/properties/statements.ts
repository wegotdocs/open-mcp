import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("The start date for statements, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) \"YYYY-MM-DD\" format, e.g. \"2020-10-30\"."),
  "end_date": z.string().date().describe("The end date for statements, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) \"YYYY-MM-DD\" format, e.g. \"2020-10-30\". You can request up to two years of data.")
}