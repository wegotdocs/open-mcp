import { z } from "zod";
export const inputParams = {
    "query": z.string().describe("A string to match against text fields in the issue such as title, description, or comments.").optional(),
    "currentJQL": z.string().describe("A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead.").optional(),
    "currentIssueKey": z.string().describe("The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.").optional(),
    "currentProjectId": z.string().describe("The ID of a project that suggested issues must belong to.").optional(),
    "showSubTasks": z.boolean().describe("Indicate whether to include subtasks in the suggestions list.").optional(),
    "showSubTaskParent": z.boolean().describe("When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query.").optional()
};
