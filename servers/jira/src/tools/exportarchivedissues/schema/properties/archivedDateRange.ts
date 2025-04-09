import { z } from "zod"

export const inputParams = {
  "dateAfter": z.string().describe("List issues archived after a specified date, passed in the YYYY-MM-DD format."),
  "dateBefore": z.string().describe("List issues archived before a specified date provided in the YYYY-MM-DD format.")
}