import { z } from "zod"

export const inputParamsSchema = {
  "executionId": z.string().describe("The ID of the process run.").optional(),
  "logLevel": z.enum(["SEVERE","WARNING","INFO","CONFIG","FINE","FINER","FINEST","ALL"]).describe("The process execution log level with ALL being the default. \n\n If you do not specify the log level, you receive all types of logs. The log level is case sensitive; you must use all uppercase letters.").optional()
}