import { z } from "zod"

export const toolName = `serviceregistryresource_services_get`
export const toolDescription = `Retrieve the attributes of service registries`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/service-registry`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "serviceIds"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "serviceIds": z.array(z.string()).min(1).max(20).describe("The ID of the services (the strings starting with \"b:\" need to be decoded in Base64).")
}