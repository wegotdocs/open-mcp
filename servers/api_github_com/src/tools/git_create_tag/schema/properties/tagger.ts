import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the author of the tag"),
  "email": z.string().describe("The email of the author of the tag"),
  "date": z.string().datetime({ offset: true }).describe("When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional()
}