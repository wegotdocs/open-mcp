import { z } from "zod"

export const toolName = `linkissues`
export const toolDescription = `Create issue link`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issueLink`
export const method = `post`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "comment",
    "inwardIssue",
    "outwardIssue",
    "type"
  ]
}
export const flatMap = {}

export const inputParams = {
  "comment": z.object({ "author": z.string().optional(), "body": z.any().describe("The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).").optional(), "created": z.string().datetime({ offset: true }).describe("The date and time at which the comment was created.").readonly().optional(), "id": z.string().describe("The ID of the comment.").readonly().optional(), "jsdAuthorCanSeeRequest": z.boolean().describe("Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature.").readonly().optional(), "jsdPublic": z.boolean().describe("Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.").readonly().optional(), "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("A list of comment properties. Optional on create and update.").optional(), "renderedBody": z.string().describe("The rendered version of the comment.").readonly().optional(), "self": z.string().describe("The URL of the comment.").readonly().optional(), "updateAuthor": z.string().optional(), "updated": z.string().datetime({ offset: true }).describe("The date and time at which the comment was updated last.").readonly().optional(), "visibility": z.string().optional() }).catchall(z.any()).describe("A comment.").optional(),
  "inwardIssue": z.object({ "fields": z.string().optional(), "id": z.string().describe("The ID of an issue. Required if `key` isn't provided.").optional(), "key": z.string().describe("The key of an issue. Required if `id` isn't provided.").optional(), "self": z.string().url().describe("The URL of the issue.").readonly().optional() }).strict().describe("The ID or key of a linked issue."),
  "outwardIssue": z.object({ "fields": z.string().optional(), "id": z.string().describe("The ID of an issue. Required if `key` isn't provided.").optional(), "key": z.string().describe("The key of an issue. Required if `id` isn't provided.").optional(), "self": z.string().url().describe("The URL of the issue.").readonly().optional() }).strict().describe("The ID or key of a linked issue."),
  "type": z.object({ "id": z.string().describe("The ID of the issue link type and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `name` isn't provided. Otherwise, read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only.").optional(), "inward": z.string().describe("The description of the issue link type inward link and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(), "name": z.string().describe("The name of the issue link type and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `id` isn't provided. Otherwise, read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(), "outward": z.string().describe("The description of the issue link type outward link and is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.").optional(), "self": z.string().url().describe("The URL of the issue link type. Read only.").readonly().optional() }).strict().describe("This object is used as follows:\n\n *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](#api-rest-api-3-issueLinkType-get).\n *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it defines and reports on issue link types.")
}