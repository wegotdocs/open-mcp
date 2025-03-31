import { z } from "zod"

export const toolName = `gettransitions`
export const toolDescription = `Get transitions`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/transitions`
export const method = `get`
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

export const inputParams = z.object({ "p_issueIdOrKey": z.string().describe("The ID or key of the issue."), "q_expand": z.string().describe("Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).").optional(), "q_transitionId": z.string().describe("The ID of the transition.").optional(), "q_skipRemoteOnlyCondition": z.boolean().describe("Whether transitions with the condition *Hide From User Condition* are included in the response."), "q_includeUnavailableTransitions": z.boolean().describe("Whether details of transitions that fail a condition are included in the response"), "q_sortByOpsBarAndStatus": z.boolean().describe("Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value.") }).shape