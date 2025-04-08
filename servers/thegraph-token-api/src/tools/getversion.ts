import { z } from "zod"

export const toolName = `getversion`
export const toolDescription = `Get the version of the API`
export const baseUrl = `https://token-api.thegraph.com`
export const path = `/version`
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

export const inputParams = {}