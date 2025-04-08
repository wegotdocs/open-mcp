import { z } from "zod"

export const toolName = `appissuefieldvalueupdateresource_updateissuefields_put`
export const toolDescription = `Bulk update custom field value`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/migration/field`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "Atlassian-Transfer-Id"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "updateValueList"
  ]
}
export const flatMap = {}

export const inputParams = {
  "updateValueList": z.array(z.object({ "_type": z.enum(["StringIssueField","NumberIssueField","RichTextIssueField","SingleSelectIssueField","MultiSelectIssueField","TextIssueField"]).describe("The type of custom field."), "fieldID": z.number().int().describe("The custom field ID."), "issueID": z.number().int().describe("The issue ID."), "number": z.number().describe("The value of number type custom field when `_type` is `NumberIssueField`.").optional(), "optionID": z.string().describe("The value of single select and multiselect custom field type when `_type` is `SingleSelectIssueField` or `MultiSelectIssueField`.").optional(), "richText": z.string().describe("The value of richText type custom field when `_type` is `RichTextIssueField`.").optional(), "string": z.string().describe("The value of string type custom field when `_type` is `StringIssueField`.").optional(), "text": z.string().describe("The value of of text custom field type when `_type` is `TextIssueField`.").optional() }).describe("A list of custom field details.")).describe("The list of custom field update details.").optional(),
  "Atlassian-Transfer-Id": z.string().uuid().describe("The ID of the transfer.")
}