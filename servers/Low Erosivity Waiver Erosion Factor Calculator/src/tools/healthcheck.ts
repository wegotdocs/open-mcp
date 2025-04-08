import { z } from "zod"

export const toolName = `healthcheck`
export const toolDescription = `Healthcheck`
export const baseUrl = `https://api.epa.gov/lew`
export const path = `/v1/health`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "X-Api-Key"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "X-Api-Key": z.string().describe("API key used to access EPA web service resources. The below default value key is used for testing purposes only. Web service consumers should <a target=\"_blank\" href=\"..\\api_key_signup.html\">obtain their own API key</a>")
}