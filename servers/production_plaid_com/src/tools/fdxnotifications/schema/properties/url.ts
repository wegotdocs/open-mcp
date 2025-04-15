import { z } from "zod"

export const inputParamsSchema = {
  "href": z.string().describe("URL to invoke the action on the resource"),
  "action": z.enum(["GET","POST","PATCH","DELETE","PUT"]).describe("HTTP Method to use for the request").optional(),
  "rel": z.string().describe("Relation of this link to its containing entity, as defined by and with many example relation values at [IETF RFC5988](https://datatracker.ietf.org/doc/html/rfc5988)").optional(),
  "types": z.array(z.enum(["application/pdf","image/gif","image/jpeg","image/tiff","image/png","application/json"]).describe("Types of document formats. (Suggested values)")).describe("Content-types that can be used in the Accept header").optional()
}