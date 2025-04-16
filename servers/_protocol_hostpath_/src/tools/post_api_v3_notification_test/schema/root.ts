import { z } from "zod"

export const inputParamsSchema = {
  "forceTest": z.boolean().optional(),
  "id": z.number().int().optional(),
  "name": z.string().nullable().optional(),
  "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(),
  "implementationName": z.string().nullable().optional(),
  "implementation": z.string().nullable().optional(),
  "configContract": z.string().nullable().optional(),
  "infoLink": z.string().nullable().optional(),
  "message": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `message` to the tool, first call the tool `expandSchema` with \"/properties/message\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "tags": z.array(z.number().int()).nullable().optional(),
  "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.number().int().optional(), "name": z.string().nullable().optional(), "order": z.number().int().optional(), "hint": z.string().nullable().optional(), "dividerAfter": z.boolean().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.number().int().optional(), "name": z.string().nullable().optional(), "label": z.string().nullable().optional(), "unit": z.string().nullable().optional(), "helpText": z.string().nullable().optional(), "helpTextWarning": z.string().nullable().optional(), "helpLink": z.string().nullable().optional(), "value": z.any().nullable().optional(), "type": z.string().nullable().optional(), "advanced": z.boolean().optional(), "selectOptions": z.array(z.object({ "value": z.string().optional(), "name": z.string().optional(), "order": z.string().optional(), "hint": z.string().optional(), "dividerAfter": z.string().optional() }).strict()).nullable().optional(), "selectOptionsProviderAction": z.string().nullable().optional(), "section": z.string().nullable().optional(), "hidden": z.string().nullable().optional(), "privacy": z.enum(["normal","password","apiKey","userName"]).optional(), "placeholder": z.string().nullable().optional(), "isFloat": z.boolean().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().nullable().optional(), "fields": z.array(z.object({ "order": z.string().optional(), "name": z.string().optional(), "label": z.string().optional(), "unit": z.string().optional(), "helpText": z.string().optional(), "helpTextWarning": z.string().optional(), "helpLink": z.string().optional(), "value": z.string().optional(), "type": z.string().optional(), "advanced": z.string().optional(), "selectOptions": z.string().optional(), "selectOptionsProviderAction": z.string().optional(), "section": z.string().optional(), "hidden": z.string().optional(), "privacy": z.string().optional(), "placeholder": z.string().optional(), "isFloat": z.string().optional() }).strict()).nullable().optional(), "implementationName": z.string().nullable().optional(), "implementation": z.string().nullable().optional(), "configContract": z.string().nullable().optional(), "infoLink": z.string().nullable().optional(), "message": z.object({ "message": z.string().nullable().optional(), "type": z.enum(["info","warning","error"]).optional() }).strict().optional(), "tags": z.array(z.number().int()).nullable().optional(), "presets": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "fields": z.string().optional(), "implementationName": z.string().optional(), "implementation": z.string().optional(), "configContract": z.string().optional(), "infoLink": z.string().optional(), "message": z.string().optional(), "tags": z.string().optional(), "presets": z.string().optional(), "link": z.string().optional(), "onGrab": z.string().optional(), "onDownload": z.string().optional(), "onUpgrade": z.string().optional(), "onRename": z.string().optional(), "onMovieAdded": z.string().optional(), "onMovieDelete": z.string().optional(), "onMovieFileDelete": z.string().optional(), "onMovieFileDeleteForUpgrade": z.string().optional(), "onHealthIssue": z.string().optional(), "includeHealthWarnings": z.string().optional(), "onHealthRestored": z.string().optional(), "onApplicationUpdate": z.string().optional(), "onManualInteractionRequired": z.string().optional(), "supportsOnGrab": z.string().optional(), "supportsOnDownload": z.string().optional(), "supportsOnUpgrade": z.string().optional(), "supportsOnRename": z.string().optional(), "supportsOnMovieAdded": z.string().optional(), "supportsOnMovieDelete": z.string().optional(), "supportsOnMovieFileDelete": z.string().optional(), "supportsOnMovieFileDeleteForUpgrade": z.string().optional(), "supportsOnHealthIssue": z.string().optional(), "supportsOnHealthRestored": z.string().optional(), "supportsOnApplicationUpdate": z.string().optional(), "supportsOnManualInteractionRequired": z.string().optional(), "testCommand": z.string().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(), "link": z.string().nullable().optional(), "onGrab": z.boolean().optional(), "onDownload": z.boolean().optional(), "onUpgrade": z.boolean().optional(), "onRename": z.boolean().optional(), "onMovieAdded": z.boolean().optional(), "onMovieDelete": z.boolean().optional(), "onMovieFileDelete": z.boolean().optional(), "onMovieFileDeleteForUpgrade": z.boolean().optional(), "onHealthIssue": z.boolean().optional(), "includeHealthWarnings": z.boolean().optional(), "onHealthRestored": z.boolean().optional(), "onApplicationUpdate": z.boolean().optional(), "onManualInteractionRequired": z.boolean().optional(), "supportsOnGrab": z.boolean().optional(), "supportsOnDownload": z.boolean().optional(), "supportsOnUpgrade": z.boolean().optional(), "supportsOnRename": z.boolean().optional(), "supportsOnMovieAdded": z.boolean().optional(), "supportsOnMovieDelete": z.boolean().optional(), "supportsOnMovieFileDelete": z.boolean().optional(), "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(), "supportsOnHealthIssue": z.boolean().optional(), "supportsOnHealthRestored": z.boolean().optional(), "supportsOnApplicationUpdate": z.boolean().optional(), "supportsOnManualInteractionRequired": z.boolean().optional(), "testCommand": z.string().nullable().optional() }).strict()).nullable().optional(),
  "link": z.string().nullable().optional(),
  "onGrab": z.boolean().optional(),
  "onDownload": z.boolean().optional(),
  "onUpgrade": z.boolean().optional(),
  "onRename": z.boolean().optional(),
  "onMovieAdded": z.boolean().optional(),
  "onMovieDelete": z.boolean().optional(),
  "onMovieFileDelete": z.boolean().optional(),
  "onMovieFileDeleteForUpgrade": z.boolean().optional(),
  "onHealthIssue": z.boolean().optional(),
  "includeHealthWarnings": z.boolean().optional(),
  "onHealthRestored": z.boolean().optional(),
  "onApplicationUpdate": z.boolean().optional(),
  "onManualInteractionRequired": z.boolean().optional(),
  "supportsOnGrab": z.boolean().optional(),
  "supportsOnDownload": z.boolean().optional(),
  "supportsOnUpgrade": z.boolean().optional(),
  "supportsOnRename": z.boolean().optional(),
  "supportsOnMovieAdded": z.boolean().optional(),
  "supportsOnMovieDelete": z.boolean().optional(),
  "supportsOnMovieFileDelete": z.boolean().optional(),
  "supportsOnMovieFileDeleteForUpgrade": z.boolean().optional(),
  "supportsOnHealthIssue": z.boolean().optional(),
  "supportsOnHealthRestored": z.boolean().optional(),
  "supportsOnApplicationUpdate": z.boolean().optional(),
  "supportsOnManualInteractionRequired": z.boolean().optional(),
  "testCommand": z.string().nullable().optional()
}