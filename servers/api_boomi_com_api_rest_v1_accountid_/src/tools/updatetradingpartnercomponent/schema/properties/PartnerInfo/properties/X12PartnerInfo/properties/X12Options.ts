import { z } from "zod"

export const inputParamsSchema = {
  "acknowledgementoption": z.enum(["donotackitem","ackfuncitem","acktranitem"]).optional(),
  "elementDelimiter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `elementDelimiter` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/X12PartnerInfo/properties/X12Options/properties/elementDelimiter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "envelopeoption": z.enum(["groupall","groupfg","groupst"]).optional(),
  "filteracknowledgements": z.boolean().optional(),
  "outboundInterchangeValidation": z.boolean().optional(),
  "outboundValidationOption": z.enum(["filterError","failAll"]).optional(),
  "rejectDuplicateInterchange": z.boolean().optional(),
  "segmentTerminator": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `segmentTerminator` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/X12PartnerInfo/properties/X12Options/properties/segmentTerminator\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}