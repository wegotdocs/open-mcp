import { z } from "zod"

export const toolName = `generateimage`
export const toolDescription = `/api/v1/image/generate`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/image/generate`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [
    "Accept-Encoding"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "model",
    "prompt",
    "negative_prompt",
    "style_preset",
    "height",
    "width",
    "steps",
    "cfg_scale",
    "seed",
    "lora_strength",
    "safe_mode",
    "return_binary",
    "hide_watermark",
    "format",
    "embed_exif_metadata",
    "inpaint"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "model": z.string().describe("The model to use for image generation."), "prompt": z.string().min(1).max(1500).describe("The description for the image. Character limit is model specific and is listed in the promptCharacterLimit setting in the model list endpoint."), "negative_prompt": z.string().max(1500).describe("A description of what should not be in the image. Character limit is model specific and is listed in the promptCharacterLimit constraint in the model list endpoint.").optional(), "style_preset": z.string().describe("An image style to apply to the image. Visit https://docs.venice.ai/apiv1imagegenerate for more details.").optional(), "height": z.number().int().gt(0).lte(1280).describe("Height of the generated image. Each model has a specific height and width divisor listed in the widthHeightDivisor constraint in the model list endpoint."), "width": z.number().int().gt(0).lte(1280).describe("Width of the generated image. Each model has a specific height and width divisor listed in the widthHeightDivisor constraint in the model list endpoint."), "steps": z.number().int().gt(0).lte(50).describe("Number of inference steps. The following models have reduced max steps from the global max: flux-dev: 30 max steps, flux-dev-uncensored: 30 max steps, stable-diffusion-3.5: 30 max steps, stable-diffusion-3.5-rev2: 30 max steps. These constraints are exposed in the model list endpoint for each model."), "cfg_scale": z.number().gt(0).lte(20).describe("CFG scale parameter. Higher values lead to more adherence to the prompt.").optional(), "seed": z.number().int().gte(-999999999).lte(999999999).describe("Random seed for generation. If not provided, a random seed will be used.").optional(), "lora_strength": z.number().int().gte(0).lte(100).describe("Lora strength for the model. Only applies if the model uses additional Loras.").optional(), "safe_mode": z.boolean().describe("Whether to use safe mode. If enabled, this will blur images that are classified as having adult content.").optional(), "return_binary": z.boolean().describe("Whether to return binary image data instead of base64."), "hide_watermark": z.boolean().describe("Whether to hide the Venice watermark. Venice may ignore this parameter for certain generated content."), "format": z.enum(["webp","png"]).describe("The image format to return. WebP are smaller and optimized for web use. PNG are higher quality but larger in file size. NOTE: This currently defaults to PNG but will change in the future to WebP. If you wish to receive PNGs, ensure your API call specifies the format."), "embed_exif_metadata": z.boolean().describe("Embed prompt generation information into the image's EXIF metadata."), "inpaint": z.object({ "strength": z.number().int().gte(0).lte(100).describe("Strength of the inpainting."), "source_image_base64": z.string().describe("Base64 encoded source image to inpaint."), "mask": z.object({ "image_prompt": z.string().describe("A text prompt describing the original input image that an image model would use to produce a similar/identical image, including the changed features the user will be inpainting."), "object_target": z.string().describe("One or more elements contained within the original image the user wants to inpaint over; used by a segmentation model to create an image mask."), "inferred_object": z.string().describe("The content the user is adding to the image via inpainting, meant to replace the pixels occupied by object_target.") }).optional() }).optional(), "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br). Only applied when return_binary is false.").optional() }).shape