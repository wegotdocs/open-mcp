import { z } from "zod"

export const inputParamsSchema = {
  "acknowledgementoption": z.enum(["donotackitem","ackitem"]).optional(),
  "compositeDelimiter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `compositeDelimiter` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/EdifactPartnerInfo/properties/EdifactOptions/properties/compositeDelimiter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "elementDelimiter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `elementDelimiter` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/EdifactPartnerInfo/properties/EdifactOptions/properties/elementDelimiter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "envelopeoption": z.enum(["groupall","groupfg","groupmessage"]).optional(),
  "filteracknowledgements": z.boolean().optional(),
  "includeUNA": z.boolean().optional(),
  "outboundInterchangeValidation": z.boolean().optional(),
  "outboundValidationOption": z.enum(["filterError","failAll"]).optional(),
  "rejectDuplicateUNB": z.boolean().optional(),
  "segmentTerminator": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `segmentTerminator` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/EdifactPartnerInfo/properties/EdifactOptions/properties/segmentTerminator\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}