export { inputParams } from "./schema/root.js"

export const toolName = `get_network_transfer_prices`
export const toolDescription = `List network transfer prices`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/network-transfer/prices`
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