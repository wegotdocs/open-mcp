import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the author (or committer) of the commit"),
  "email": z.string().describe("The email of the author (or committer) of the commit"),
  "date": z.string().datetime({ offset: true }).describe("Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional()
}