import { z } from "zod";
export const inputParams = {
    "issueIdOrKey": z.string().describe("The ID or key of the issue."),
    "adjustEstimate": z.enum(["leave", "auto"]).describe("Defines how to update the issue's time estimate, the options are:\n\n *  `leave` Leaves the estimate unchanged.\n *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being deleted.").optional(),
    "overrideEditableFlag": z.boolean().describe("Whether the work log entries should be removed to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional(),
    "ids": z.array(z.number().int()).describe("A list of worklog IDs.")
};
