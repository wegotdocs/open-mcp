export { inputParams } from "./schema/root.js"

export const toolName = `get_client_thumbnail`
export const toolDescription = `Get the OAuth client's thumbnail`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account/oauth-clients/{clientId}/thumbnail`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}