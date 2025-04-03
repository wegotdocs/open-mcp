import { z } from "zod"

export const toolName = `getimages`
export const toolDescription = `Render images of file nodes`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/images/{file_key}`
export const method = `get`
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
  "query": [
    "ids",
    "version",
    "scale",
    "format",
    "svg_outline_text",
    "svg_include_id",
    "svg_include_node_id",
    "svg_simplify_stroke",
    "contents_only",
    "use_absolute_bounds"
  ],
  "header": [],
  "path": [
    "file_key"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "file_key": z.string().describe("File to export images from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."), "ids": z.string().describe("A comma separated list of node IDs to render."), "version": z.string().describe("A specific version ID to get. Omitting this will get the current version of the file.").optional(), "scale": z.number().gte(0.01).lte(4).describe("A number between 0.01 and 4, the image scaling factor.").optional(), "format": z.enum(["jpg","png","svg","pdf"]).describe("A string enum for the image output format."), "svg_outline_text": z.boolean().describe("Whether text elements are rendered as outlines (vector paths) or as `<text>` elements in SVGs.\n\nRendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.\n\nExporting as `<text>` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma."), "svg_include_id": z.boolean().describe("Whether to include id attributes for all SVG elements. Adds the layer name to the `id` attribute of an svg element."), "svg_include_node_id": z.boolean().describe("Whether to include node id attributes for all SVG elements. Adds the node id to a `data-node-id` attribute of an svg element."), "svg_simplify_stroke": z.boolean().describe("Whether to simplify inside/outside strokes and use stroke attribute if possible instead of `<mask>`."), "contents_only": z.boolean().describe("Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering."), "use_absolute_bounds": z.boolean().describe("Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping.") }).shape