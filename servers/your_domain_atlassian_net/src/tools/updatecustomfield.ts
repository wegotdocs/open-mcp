import { z } from "zod"

export const toolName = `updatecustomfield`
export const toolDescription = `Update custom field`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}`
export const method = `put`
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
]

export const inputParams = z.object({ "p_fieldId": z.string().describe("The ID of the custom field."), "b_description": z.string().describe("The description of the custom field. The maximum length is 40000 characters.").optional(), "b_name": z.string().describe("The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters.").optional(), "b_searcherKey": z.enum(["com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:daterange","com.atlassian.jira.plugin.system.customfieldtypes:datetimerange","com.atlassian.jira.plugin.system.customfieldtypes:exactnumber","com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher","com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher","com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher","com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:numberrange","com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher","com.atlassian.jira.plugin.system.customfieldtypes:textsearcher","com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher","com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"]).describe("The searcher that defines the way the field is searched in Jira. It can be set to `null`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):\n\n *  `cascadingselect`: `cascadingselectsearcher`\n *  `datepicker`: `daterange`\n *  `datetime`: `datetimerange`\n *  `float`: `exactnumber` or `numberrange`\n *  `grouppicker`: `grouppickersearcher`\n *  `importid`: `exactnumber` or `numberrange`\n *  `labels`: `labelsearcher`\n *  `multicheckboxes`: `multiselectsearcher`\n *  `multigrouppicker`: `multiselectsearcher`\n *  `multiselect`: `multiselectsearcher`\n *  `multiuserpicker`: `userpickergroupsearcher`\n *  `multiversion`: `versionsearcher`\n *  `project`: `projectsearcher`\n *  `radiobuttons`: `multiselectsearcher`\n *  `readonlyfield`: `textsearcher`\n *  `select`: `multiselectsearcher`\n *  `textarea`: `textsearcher`\n *  `textfield`: `textsearcher`\n *  `url`: `exacttextsearcher`\n *  `userpicker`: `userpickergroupsearcher`\n *  `version`: `versionsearcher`").optional() }).shape