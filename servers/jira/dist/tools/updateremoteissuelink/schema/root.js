import { z } from "zod";
export const inputParams = {
    "issueIdOrKey": z.string().describe("The ID or key of the issue."),
    "linkId": z.string().describe("The ID of the remote issue link."),
    "application": z.string().optional(),
    "globalId": z.string().describe("An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.\n\nSetting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.\n\nThe maximum length is 255 characters.").optional(),
    "object": z.string(),
    "relationship": z.string().describe("Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.").optional()
};
