import { z } from "zod"

export const toolName = `getcreaterequestschema`
export const toolDescription = `Get a crate request schema`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/createRequest/byName`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "entityType"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "entityType": z.string().optional() }).shape