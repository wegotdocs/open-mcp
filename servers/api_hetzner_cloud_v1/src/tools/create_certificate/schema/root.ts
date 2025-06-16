import { z } from "zod"

export const inputParamsSchema = {
  "certificate": z.string().describe("Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.").optional(),
  "domain_names": z.array(z.string()).describe("Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.").optional(),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"[Labels](#labels)\".\n</property-description>").optional(),
  "name": z.string().describe("Name of the Certificate"),
  "private_key": z.string().describe("Certificate key in PEM format. Required for type `uploaded` Certificates.").optional(),
  "type": z.enum(["managed","uploaded"]).describe("Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate.").optional()
}