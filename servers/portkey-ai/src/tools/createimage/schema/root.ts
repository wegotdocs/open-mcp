import { z } from "zod"

export const inputParams = {
  "prompt": z.string().describe("A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`."),
  "model": z.union([z.string(), z.enum(["dall-e-2","dall-e-3"])]).nullable().describe("The model to use for image generation.").optional(),
  "n": z.number().int().gte(1).lte(10).nullable().describe("The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.").optional(),
  "quality": z.enum(["standard","hd"]).describe("The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`.").optional(),
  "response_format": z.enum(["url","b64_json"]).nullable().describe("The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.").optional(),
  "size": z.enum(["256x256","512x512","1024x1024","1792x1024","1024x1792"]).nullable().describe("The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.").optional(),
  "style": z.enum(["vivid","natural"]).nullable().describe("The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.").optional(),
  "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).\n").optional()
}