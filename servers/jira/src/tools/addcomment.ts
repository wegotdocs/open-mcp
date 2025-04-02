import { z } from "zod"

export const toolName = `addcomment`
export const toolDescription = `Add comment`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/comment`
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
  "query": [
    "expand"
  ],
  "header": [],
  "path": [
    "issueIdOrKey"
  ],
  "cookie": [],
  "body": [
    "author",
    "body",
    "created",
    "id",
    "jsdAuthorCanSeeRequest",
    "jsdPublic",
    "properties",
    "renderedBody",
    "self",
    "updateAuthor",
    "updated",
    "visibility"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "issueIdOrKey": z.string().describe("The ID or key of the issue."), "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.").optional(), "author": z.string().optional(), "body": z.any().describe("The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).").optional(), "created": z.string().datetime({ offset: true }).describe("The date and time at which the comment was created.").readonly().optional(), "id": z.string().describe("The ID of the comment.").readonly().optional(), "jsdAuthorCanSeeRequest": z.boolean().describe("Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature.").readonly().optional(), "jsdPublic": z.boolean().describe("Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.").readonly().optional(), "properties": z.array(z.object({ "key": z.string().describe("The key of the property. Required on create and update.").optional(), "value": z.any().describe("The value of the property. Required on create and update.").optional() }).strict().describe("An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).")).describe("A list of comment properties. Optional on create and update.").optional(), "renderedBody": z.string().describe("The rendered version of the comment.").readonly().optional(), "self": z.string().describe("The URL of the comment.").readonly().optional(), "updateAuthor": z.string().optional(), "updated": z.string().datetime({ offset: true }).describe("The date and time at which the comment was updated last.").readonly().optional(), "visibility": z.string().optional() }).shape