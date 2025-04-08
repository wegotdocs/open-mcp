import { z } from "zod"

export const toolName = `apigee_organizations_updatecontrolplaneaccess`
export const toolDescription = `Updates the permissions required to allow Apigee runtime-plane components access to the control plane. Currently, the permissions required are to: 1. Allow runtime components to publish analytics data to the control plane. **Note**: Availab`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/controlPlaneAccess`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
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
    "updateMask"
  ],
  "header": [],
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": [
    "analyticsPublisherIdentities",
    "name",
    "synchronizerIdentities"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "updateMask": z.string().optional(),
  "analyticsPublisherIdentities": z.array(z.string()).describe("Optional. Array of service accounts authorized to publish analytics data to the control plane (for the Message Processor component).").optional(),
  "name": z.string().describe("Identifier. The resource name of the ControlPlaneAccess. Format: \"organizations/{org}/controlPlaneAccess\"").optional(),
  "synchronizerIdentities": z.array(z.string()).describe("Optional. Array of service accounts to grant access to control plane resources (for the Synchronizer component). The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).").optional()
}