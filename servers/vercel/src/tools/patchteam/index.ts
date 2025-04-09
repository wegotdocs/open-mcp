export { inputParams } from "./schema/root.js"

export const toolName = `patchteam`
export const toolDescription = `Update a Team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/teams/{teamId}`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "slug"
  ],
  "header": [],
  "path": [
    "teamId"
  ],
  "cookie": [],
  "body": [
    "avatar",
    "description",
    "emailDomain",
    "name",
    "previewDeploymentSuffix",
    "regenerateInviteCode",
    "saml",
    "b_slug",
    "enablePreviewFeedback",
    "enableProductionFeedback",
    "sensitiveEnvironmentVariablePolicy",
    "remoteCaching",
    "hideIpAddresses",
    "hideIpAddressesInLogDrains"
  ]
}
export const flatMap = {
  "b_slug": "slug"
}