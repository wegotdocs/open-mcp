import { z } from "zod";
export const toolName = `searchprojects`;
export const toolDescription = `Get projects paginated`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/project/search`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [
        "startAt",
        "maxResults",
        "orderBy",
        "id",
        "keys",
        "query",
        "typeKey",
        "categoryId",
        "action",
        "expand",
        "status",
        "properties",
        "propertyQuery"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "orderBy": z.enum(["category", "-category", "+category", "key", "-key", "+key", "name", "-name", "+name", "owner", "-owner", "+owner", "issueCount", "-issueCount", "+issueCount", "lastIssueUpdatedDate", "-lastIssueUpdatedDate", "+lastIssueUpdatedDate", "archivedDate", "+archivedDate", "-archivedDate", "deletedDate", "+deletedDate", "-deletedDate"]).describe("[Order](#ordering) the results by a field.\n\n *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).\n *  `issueCount` Sorts by the total number of issues in each project.\n *  `key` Sorts by project key.\n *  `lastIssueUpdatedTime` Sorts by the last issue update time.\n *  `name` Sorts by project name.\n *  `owner` Sorts by project lead.\n *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.\n *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date."), "id": z.array(z.number().int()).describe("The project IDs to filter the results by. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Up to 50 project IDs can be provided.").optional(), "keys": z.array(z.string()).describe("The project keys to filter the results by. To include multiple keys, provide an ampersand-separated list. For example, `keys=PA&keys=PB`. Up to 50 project keys can be provided.").optional(), "query": z.string().describe("Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive).").optional(), "typeKey": z.string().describe("Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`.").optional(), "categoryId": z.number().int().describe("The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.").optional(), "action": z.enum(["view", "browse", "edit", "create"]).describe("Filter results by projects for which the user can:\n\n *  `view` the project, meaning that they have one of the following permissions:\n    \n     *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).\n *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n *  `edit` the project, meaning that they have one of the following permissions:\n    \n     *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.\n     *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).\n *  `create` the project, meaning that they have the *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue is created."), "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `projectKeys` Returns all project keys associated with a project.\n *  `lead` Returns information about the project lead.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `url` Returns the URL associated with the project.\n *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.").optional(), "status": z.array(z.enum(["live", "archived", "deleted"])).describe("EXPERIMENTAL. Filter results by project status:\n\n *  `live` Search live projects.\n *  `archived` Search archived projects.\n *  `deleted` Search deleted projects, those in the recycle bin.").optional(), "properties": z.array(z.record(z.never())).describe("EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional(), "propertyQuery": z.string().describe("EXPERIMENTAL. A query string used to search properties. The query string cannot be specified using a JSON object. For example, to search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `[thepropertykey].something.nested=1`. Note that the propertyQuery key is enclosed in square brackets to enable searching where the propertyQuery key includes dot (.) or equals (=) characters. Note that `thepropertykey` is only returned when included in `properties`.").optional() }).shape;
