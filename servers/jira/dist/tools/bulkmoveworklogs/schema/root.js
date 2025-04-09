import { z } from "zod";
export const inputParams = {
    "issueIdOrKey": z.string(),
    "adjustEstimate": z.enum(["leave", "auto"]).describe("Defines how to update the issues' time estimate, the options are:\n\n *  `leave` Leaves the estimate unchanged.\n *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being moved in the source issue, and increases it in the destination issue.").optional(),
    "overrideEditableFlag": z.boolean().describe("Whether the work log entry should be moved to and from the issues even if the issues are not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.").optional(),
    "ids": z.array(z.number().int()).describe("A list of worklog IDs.").optional(),
    "b_issueIdOrKey": z.string().describe("The issue id or key of the destination issue").optional()
};
