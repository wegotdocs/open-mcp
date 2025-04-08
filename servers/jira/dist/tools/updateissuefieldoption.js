import { z } from "zod";
export const toolName = `updateissuefieldoption`;
export const toolDescription = `Update issue field option`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/field/{fieldKey}/option/{optionId}`;
export const method = `put`;
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
    "query": [],
    "header": [],
    "path": [
        "fieldKey",
        "optionId"
    ],
    "cookie": [],
    "body": [
        "config",
        "id",
        "properties",
        "value"
    ]
};
export const flatMap = {};
export const inputParams = {
    "fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`"),
    "optionId": z.number().int().describe("The ID of the option to be updated."),
    "config": z.object({ "attributes": z.array(z.enum(["notSelectable", "defaultValue"])).describe("DEPRECATED").optional(), "scope": z.string().optional() }).strict().describe("Details of the projects the option is available in.").optional(),
    "id": z.number().int().describe("The unique identifier for the option. This is only unique within the select field's set of options."),
    "properties": z.record(z.any()).describe("The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module.").optional(),
    "value": z.string().describe("The option's name, which is displayed in Jira.")
};
