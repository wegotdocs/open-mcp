import { z } from "zod";
export const inputParams = {
    "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `usages` Returns the project and issue types that use the status in their workflow.\n *  `workflowUsages` Returns the workflows that use the status.").optional(),
    "id": z.array(z.string()).describe("The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.\n\nMin items `1`, Max items `50`")
};
