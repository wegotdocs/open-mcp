import { z } from "zod"

export const inputParamsSchema = {
  "documentStatus": z.enum(["ANY","SUCCESS","ERROR"]).describe("- A value of ANY reruns all documents in the specified process run (in other words, the originalExecutionID).\n - A value of SUCCESS returns successfully run documents in the process run.\n - A value of ERROR returns documents that unsuccessfully ran in the process run.").optional()
}