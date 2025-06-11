import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.number().int().describe("Organization identifier").optional(),
  "locationId": z.number().int().describe("Location identifier").optional(),
  "installerType": z.enum(["WINDOWS_MSI","MAC_DMG","MAC_PKG","LINUX_DEB","LINUX_RPM","LINUX_ARM64_DEB","LINUX_ARMV7A_DEB","LINUX_ARM64_RPM","LINUX_ARMV7A_RPM"]).describe("Agent installer type").optional(),
  "usageLimit": z.number().int().describe("Usage limit").readonly().optional(),
  "content": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `content` to the tool, first call the tool `expandSchema` with \"/properties/content\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>content</property-description>").optional()
}