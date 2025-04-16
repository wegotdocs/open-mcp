import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "id": z.number().int().optional(),
  "b_name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `message` to the tool, first call the tool `expandSchema` with \"/properties/message\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "enableRss": z.string().optional(), "enableAutomaticSearch": z.string().optional(), "enableInteractiveSearch": z.string().optional(), "supportsRss": z.string().optional(), "supportsSearch": z.string().optional(), "protocol": z.string().optional(), "priority": z.string().optional(), "downloadClientId": z.string().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(), "enableRss": z.boolean().optional(), "enableAutomaticSearch": z.boolean().optional(), "enableInteractiveSearch": z.boolean().optional(), "supportsRss": z.boolean().optional(), "supportsSearch": z.boolean().optional(), "protocol": z.enum(["unknown","usenet","torrent"]).optional(), "priority": z.number().int().optional(), "downloadClientId": z.number().int().optional() }).strict()).nullable().optional(),
  "enableRss": z.boolean().optional(),
  "enableAutomaticSearch": z.boolean().optional(),
  "enableInteractiveSearch": z.boolean().optional(),
  "supportsRss": z.boolean().optional(),
  "supportsSearch": z.boolean().optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "priority": z.number().int().optional(),
  "downloadClientId": z.number().int().optional()
}