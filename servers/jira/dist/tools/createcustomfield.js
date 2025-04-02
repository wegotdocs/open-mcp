import { z } from "zod";
export const toolName = `createcustomfield`;
export const toolDescription = `Create custom field`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/field`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": [
        "description",
        "name",
        "searcherKey",
        "type"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "description": z.string().describe("The description of the custom field, which is displayed in Jira.").optional(), "name": z.string().describe("The name of the custom field, which is displayed in Jira. This is not the unique identifier."), "searcherKey": z.enum(["com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:daterange", "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange", "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber", "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher", "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:numberrange", "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher", "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"]).describe("The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.  \nThe search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):\n\n *  `cascadingselect`: `cascadingselectsearcher`\n *  `datepicker`: `daterange`\n *  `datetime`: `datetimerange`\n *  `float`: `exactnumber` or `numberrange`\n *  `grouppicker`: `grouppickersearcher`\n *  `importid`: `exactnumber` or `numberrange`\n *  `labels`: `labelsearcher`\n *  `multicheckboxes`: `multiselectsearcher`\n *  `multigrouppicker`: `multiselectsearcher`\n *  `multiselect`: `multiselectsearcher`\n *  `multiuserpicker`: `userpickergroupsearcher`\n *  `multiversion`: `versionsearcher`\n *  `project`: `projectsearcher`\n *  `radiobuttons`: `multiselectsearcher`\n *  `readonlyfield`: `textsearcher`\n *  `select`: `multiselectsearcher`\n *  `textarea`: `textsearcher`\n *  `textfield`: `textsearcher`\n *  `url`: `exacttextsearcher`\n *  `userpicker`: `userpickergroupsearcher`\n *  `version`: `versionsearcher`\n\nIf no searcher is provided, the field isn't searchable. However, [Forge custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-) have a searcher set automatically, so are always searchable.").optional(), "type": z.string().describe("The type of the custom field. These built-in custom field types are available:\n\n *  `cascadingselect`: Enables values to be selected from two levels of select lists (value: `com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect`)\n *  `datepicker`: Stores a date using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:datepicker`)\n *  `datetime`: Stores a date with a time component (value: `com.atlassian.jira.plugin.system.customfieldtypes:datetime`)\n *  `float`: Stores and validates a numeric (floating point) input (value: `com.atlassian.jira.plugin.system.customfieldtypes:float`)\n *  `grouppicker`: Stores a user group using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:grouppicker`)\n *  `importid`: A read-only field that stores the ID the issue had in the system it was imported from (value: `com.atlassian.jira.plugin.system.customfieldtypes:importid`)\n *  `labels`: Stores labels (value: `com.atlassian.jira.plugin.system.customfieldtypes:labels`)\n *  `multicheckboxes`: Stores multiple values using checkboxes (value: ``)\n *  `multigrouppicker`: Stores multiple user groups using a picker control (value: ``)\n *  `multiselect`: Stores multiple values using a select list (value: `com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes`)\n *  `multiuserpicker`: Stores multiple users using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker`)\n *  `multiversion`: Stores multiple versions from the versions available in a project using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multiversion`)\n *  `project`: Stores a project from a list of projects that the user is permitted to view (value: `com.atlassian.jira.plugin.system.customfieldtypes:project`)\n *  `radiobuttons`: Stores a value using radio buttons (value: `com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons`)\n *  `readonlyfield`: Stores a read-only text value, which can only be populated via the API (value: `com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield`)\n *  `select`: Stores a value from a configurable list of options (value: `com.atlassian.jira.plugin.system.customfieldtypes:select`)\n *  `textarea`: Stores a long text string using a multiline text area (value: `com.atlassian.jira.plugin.system.customfieldtypes:textarea`)\n *  `textfield`: Stores a text string using a single-line text box (value: `com.atlassian.jira.plugin.system.customfieldtypes:textfield`)\n *  `url`: Stores a URL (value: `com.atlassian.jira.plugin.system.customfieldtypes:url`)\n *  `userpicker`: Stores a user using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:userpicker`)\n *  `version`: Stores a version using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:version`)\n\nTo create a field based on a [Forge custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-), use the ID of the Forge custom field type as the value. For example, `ari:cloud:ecosystem::extension/e62f20a2-4b61-4dbe-bfb9-9a88b5e3ac84/548c5df1-24aa-4f7c-bbbb-3038d947cb05/static/my-cf-type-key`.") }).shape;
