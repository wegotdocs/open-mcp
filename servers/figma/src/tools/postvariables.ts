import { z } from "zod"

export const toolName = `postvariables`
export const toolDescription = `Create/modify/delete variables`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/files/{file_key}/variables`
export const method = `post`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "file_key"
  ],
  "cookie": [],
  "body": [
    "variableCollections",
    "variableModes",
    "variables",
    "variableModeValues"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "file_key": z.string().describe("File to modify variables in. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."), "variableCollections": z.array(z.object({ "action": z.literal("CREATE").describe("The action to perform for the variable collection."), "id": z.string().describe("A temporary id for this variable collection.").optional(), "name": z.string().describe("The name of this variable collection."), "initialModeId": z.string().describe("The initial mode refers to the mode that is created by default. You can set a temporary id here, in order to reference this mode later in this request.").optional(), "hiddenFromPublishing": z.boolean().describe("Whether this variable collection is hidden when publishing the current file as a library.") }).describe("An object that contains details about creating a `VariableCollection`.")).describe("For creating, updating, and deleting variable collections.").optional(), "variableModes": z.array(z.object({ "action": z.literal("CREATE").describe("The action to perform for the variable mode."), "id": z.string().describe("A temporary id for this variable mode.").optional(), "name": z.string().describe("The name of this variable mode."), "variableCollectionId": z.string().describe("The variable collection that will contain the mode. You can use the temporary id of a variable collection.") }).describe("An object that contains details about creating a `VariableMode`.")).describe("For creating, updating, and deleting modes within variable collections.").optional(), "variables": z.array(z.object({ "action": z.literal("CREATE").describe("The action to perform for the variable."), "id": z.string().describe("A temporary id for this variable.").optional(), "name": z.string().describe("The name of this variable."), "variableCollectionId": z.string().describe("The variable collection that will contain the variable. You can use the temporary id of a variable collection."), "resolvedType": z.enum(["BOOLEAN","FLOAT","STRING","COLOR"]).describe("The resolved type of the variable."), "description": z.string().describe("The description of this variable.").optional(), "hiddenFromPublishing": z.boolean().describe("Whether this variable is hidden when publishing the current file as a library."), "scopes": z.array(z.enum(["ALL_SCOPES","TEXT_CONTENT","CORNER_RADIUS","WIDTH_HEIGHT","GAP","ALL_FILLS","FRAME_FILL","SHAPE_FILL","TEXT_FILL","STROKE_COLOR","STROKE_FLOAT","EFFECT_FLOAT","EFFECT_COLOR","OPACITY","FONT_FAMILY","FONT_STYLE","FONT_WEIGHT","FONT_SIZE","LINE_HEIGHT","LETTER_SPACING","PARAGRAPH_SPACING","PARAGRAPH_INDENT","FONT_VARIATIONS"]).describe("Scopes allow a variable to be shown or hidden in the variable picker for various fields. This declutters the Figma UI if you have a large number of variables. Variable scopes are currently supported on `FLOAT`, `STRING`, and `COLOR` variables.\n\n`ALL_SCOPES` is a special scope that means that the variable will be shown in the variable picker for all variable fields. If `ALL_SCOPES` is set, no additional scopes can be set.\n\n`ALL_FILLS` is a special scope that means that the variable will be shown in the variable picker for all fill fields. If `ALL_FILLS` is set, no additional fill scopes can be set.\n\nValid scopes for `FLOAT` variables:\n- `ALL_SCOPES`\n- `TEXT_CONTENT`\n- `WIDTH_HEIGHT`\n- `GAP`\n- `STROKE_FLOAT`\n- `EFFECT_FLOAT`\n- `OPACITY`\n- `FONT_WEIGHT`\n- `FONT_SIZE`\n- `LINE_HEIGHT`\n- `LETTER_SPACING`\n- `PARAGRAPH_SPACING`\n- `PARAGRAPH_INDENT`\n\nValid scopes for `STRING` variables:\n- `ALL_SCOPES`\n- `TEXT_CONTENT`\n- `FONT_FAMILY`\n- `FONT_STYLE`\n\nValid scopes for `COLOR` variables:\n- `ALL_SCOPES`\n- `ALL_FILLS`\n- `FRAME_FILL`\n- `SHAPE_FILL`\n- `TEXT_FILL`\n- `STROKE_COLOR`\n- `EFFECT_COLOR`")).describe("An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.").optional(), "codeSyntax": z.object({ "WEB": z.string().optional(), "ANDROID": z.string().optional(), "iOS": z.string().optional() }).describe("An object containing platform-specific code syntax definitions for a variable. All platforms are optional.").optional() }).describe("An object that contains details about creating a `Variable`.")).describe("For creating, updating, and deleting variables.").optional(), "variableModeValues": z.array(z.object({ "variableId": z.string().describe("The target variable. You can use the temporary id of a variable."), "modeId": z.string().describe("Must correspond to a mode in the variable collection that contains the target variable."), "value": z.boolean().describe("The value for the variable. The value must match the variable's type. If setting to a variable alias, the alias must resolve to this type.") }).describe("An object that represents a value for a given mode of a variable. All properties are required.")).describe("For setting a specific value, given a variable and a mode.").optional() }).shape