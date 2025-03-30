import { z } from "zod"

export const toolName = `oneclicks_install_kubernetes`
export const toolDescription = `Install Kubernetes 1-Click Applications`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/1-clicks/kubernetes`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "addon_slugs": z.array(z.string()).describe("An array of 1-Click Application slugs to be installed to the Kubernetes cluster."), "cluster_uuid": z.string().describe("A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed.") }).optional() }).shape