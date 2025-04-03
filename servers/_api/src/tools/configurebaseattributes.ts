import { z } from "zod"

export const toolName = `configurebaseattributes`
export const toolDescription = `Configure 'required' and 'unpowered' properties of base attributes for term type`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcMetadata/helpers/adcGlossaryTermType/{id}/configureBaseAttributes`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "optional",
    "unpowered"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "optional": z.string().describe("Colon separated list of base attribute's names; by default attribute is 'required'"), "unpowered": z.string().describe("Colon separated list of base attribute's names; by default attribute is 'powered'") }).shape