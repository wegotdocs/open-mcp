import { z } from "zod"

export const inputParamsSchema = {
  "acceptackoption": z.enum(["AL","NE","ER","SU","NOT_DEFINED"]).optional(),
  "appackoption": z.enum(["AL","NE","ER","SU","NOT_DEFINED"]).optional(),
  "batchoption": z.enum(["none","batch"]).optional(),
  "compositeDelimiter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `compositeDelimiter` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/HL7PartnerInfo/properties/HL7Options/properties/compositeDelimiter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "elementDelimiter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `elementDelimiter` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/HL7PartnerInfo/properties/HL7Options/properties/elementDelimiter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "filteracknowledgements": z.boolean().optional(),
  "outboundInterchangeValidation": z.boolean().optional(),
  "outboundValidationOption": z.enum(["filterError","failAll"]).optional(),
  "rejectDuplicates": z.boolean().optional(),
  "segmentTerminator": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `segmentTerminator` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/HL7PartnerInfo/properties/HL7Options/properties/segmentTerminator\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "subCompositeDelimiter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `subCompositeDelimiter` to the tool, first call the tool `expandSchema` with \"/properties/PartnerInfo/properties/HL7PartnerInfo/properties/HL7Options/properties/subCompositeDelimiter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}