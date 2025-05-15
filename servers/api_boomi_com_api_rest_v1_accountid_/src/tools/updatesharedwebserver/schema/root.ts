import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "atomId": z.string(),
  "cloudTennantGeneral": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cloudTennantGeneral` to the tool, first call the tool `expandSchema` with \"/properties/cloudTennantGeneral\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "corsConfiguration": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `corsConfiguration` to the tool, first call the tool `expandSchema` with \"/properties/corsConfiguration\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "generalSettings": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `generalSettings` to the tool, first call the tool `expandSchema` with \"/properties/generalSettings\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "shouldRestartPlugin": z.boolean().optional(),
  "userManagement": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `userManagement` to the tool, first call the tool `expandSchema` with \"/properties/userManagement\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}