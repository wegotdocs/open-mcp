import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "domainHits": z.array(z.object({ "app": z.string().describe("The name of the application that the domain belongs to.").optional(), "component": z.string().describe("The component of the application that the domain belongs to.").optional(), "domain": z.string().describe("Domain that has been visited."), "hits": z.number().int().describe("The number of hits for this report."), "suspicious": z.boolean().describe("Suspicious is true if the service might be a Shadow AI.").optional() }).describe("This is a domain hit.")).describe("Domain that has been visited."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "origin": z.enum(["WebExtension","Proxy"]).describe("Origin indicates from where the url has been tracked."),
  "principal": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `principal` to the tool, first call the tool `expandSchema` with \"/properties/principal\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describe the principal.</property-description>")
}