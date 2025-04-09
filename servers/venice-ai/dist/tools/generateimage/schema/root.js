import { z } from "zod";
export const inputParams = {
    "model": z.string().describe("The model to use for image generation."),
    "prompt": z.string().min(1).max(1500).describe("The description for the image. Character limit is model specific and is listed in the promptCharacterLimit setting in the model list endpoint."),
    "negative_prompt": z.string().max(1500).describe("A description of what should not be in the image. Character limit is model specific and is listed in the promptCharacterLimit constraint in the model list endpoint.").optional(),
    "style_preset": z.string().describe("An image style to apply to the image. Visit https://docs.venice.ai/apiv1imagegenerate for more details.").optional(),
    "height": z.number().int().gt(0).lte(1280).describe("Height of the generated image. Each model has a specific height and width divisor listed in the widthHeightDivisor constraint in the model list endpoint.").optional(),
    "width": z.number().int().gt(0).lte(1280).describe("Width of the generated image. Each model has a specific height and width divisor listed in the widthHeightDivisor constraint in the model list endpoint.").optional(),
    "steps": z.number().int().gt(0).lte(50).describe("Number of inference steps. The following models have reduced max steps from the global max: flux-dev: 30 max steps, flux-dev-uncensored: 30 max steps, stable-diffusion-3.5: 30 max steps, stable-diffusion-3.5-rev2: 30 max steps. These constraints are exposed in the model list endpoint for each model.").optional(),
    "cfg_scale": z.number().gt(0).lte(20).describe("CFG scale parameter. Higher values lead to more adherence to the prompt.").optional(),
    "seed": z.number().int().gte(-999999999).lte(999999999).describe("Random seed for generation. If not provided, a random seed will be used.").optional(),
    "lora_strength": z.number().int().gte(0).lte(100).describe("Lora strength for the model. Only applies if the model uses additional Loras.").optional(),
    "safe_mode": z.boolean().describe("Whether to use safe mode. If enabled, this will blur images that are classified as having adult content.").optional(),
    "return_binary": z.boolean().describe("Whether to return binary image data instead of base64.").optional(),
    "hide_watermark": z.boolean().describe("Whether to hide the Venice watermark. Venice may ignore this parameter for certain generated content.").optional(),
    "format": z.enum(["webp", "png"]).describe("The image format to return. WebP are smaller and optimized for web use. PNG are higher quality but larger in file size. NOTE: This currently defaults to PNG but will change in the future to WebP. If you wish to receive PNGs, ensure your API call specifies the format.").optional(),
    "embed_exif_metadata": z.boolean().describe("Embed prompt generation information into the image's EXIF metadata.").optional(),
    "inpaint": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `inpaint` to the tool, first call the tool `expandSchema` with \"/properties/inpaint\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br). Only applied when return_binary is false.").optional()
};
