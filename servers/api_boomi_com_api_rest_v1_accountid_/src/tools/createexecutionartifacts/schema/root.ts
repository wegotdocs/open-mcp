import { z } from "zod"

export const inputParamsSchema = {
  "executionId": z.string().describe("The ID of the given process run. You can access the run ID in the View Extended Information dialog (Manage > Process Reporting > Action menu) on the user interface.").optional()
}