import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "id": z.string().describe("The ID of the worklog."),
  "notifyUsers": z.boolean().describe("Whether users watching the issue are notified by email.").optional(),
  "adjustEstimate": z.enum(["new","leave","manual","auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  `new` Sets the estimate to a specific value, defined in `newEstimate`.\n *  `leave` Leaves the estimate unchanged.\n *  `manual` Increases the estimate by amount specified in `increaseBy`.\n *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.").optional(),
  "newEstimate": z.string().describe("The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.").optional(),
  "increaseBy": z.string().describe("The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`.").optional(),
  "overrideEditableFlag": z.boolean().describe("Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional()
}