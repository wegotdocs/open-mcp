import { z } from "zod"

export const inputParamsSchema = {
  "background": z.enum(["transparent","opaque","auto"]).nullable().describe("This parameter is not used in Venice image generation but is supported for compatibility with OpenAI API").optional(),
  "model": z.string().describe("The model to use for image generation. Defaults to Venice's default image model. If a non-existent model is specified (ie an OpenAI model name), it will default to Venice's default image model.").optional(),
  "moderation": z.enum(["low","auto"]).nullable().describe("auto enables safe venice mode which will blur out adult content. low disables safe venice mode.").optional(),
  "n": z.number().int().gte(1).lte(1).nullable().describe("Number of images to generate. Venice presently only supports 1 image per request.").optional(),
  "output_compression": z.number().int().gte(0).lte(100).nullable().describe("This parameter is not used in Venice image generation but is supported for compatibility with OpenAI API").optional(),
  "output_format": z.enum(["jpeg","png","webp"]).describe("Output format for generated images").optional(),
  "prompt": z.string().min(1).max(1500).describe("A text description of the desired image."),
  "quality": z.enum(["auto","high","medium","low","hd","standard"]).nullable().describe("This parameter is not used in Venice image generation but is supported for compatibility with OpenAI API").optional(),
  "response_format": z.enum(["b64_json","url"]).nullable().describe("Response format. URL will be a data URL.").optional(),
  "size": z.enum(["auto","256x256","512x512","1024x1024","1536x1024","1024x1536","1792x1024","1024x1792"]).nullable().describe("Size of generated images. Default is 1024x1024").optional(),
  "style": z.enum(["vivid","natural"]).nullable().describe("This parameter is not used in Venice image generation but is supported for compatibility with OpenAI API").optional(),
  "user": z.string().describe("This parameter is not used in Venice image generation but is supported for compatibility with OpenAI API").optional(),
  "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br).").optional()
}