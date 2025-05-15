import { z } from "zod"

export const inputParamsSchema = {
  "workerId": z.string().describe("The name of an execution worker. Locate the name of an execution worker by navigating to the Runtime Workers panel in Manage > Runtime Management on the user interface.").optional()
}