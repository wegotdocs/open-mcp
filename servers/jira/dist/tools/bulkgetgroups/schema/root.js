import { z } from "zod";
export const inputParams = {
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "groupId": z.array(z.string()).describe("The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`.").optional(),
    "groupName": z.array(z.string()).describe("The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`.").optional(),
    "accessType": z.string().describe("The access level of a group. Valid values: 'site-admin', 'admin', 'user'.").optional(),
    "applicationKey": z.string().describe("The application key of the product user groups to search for. Valid values: 'jira-servicedesk', 'jira-software', 'jira-product-discovery', 'jira-core'.").optional()
};
