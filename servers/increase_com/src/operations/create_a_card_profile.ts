import { z } from "zod"

export const toolName = `create_a_card_profile`
export const toolDescription = `Create a Card Profile`
export const baseUrl = `https://api.increase.com`
export const path = `/card_profiles`
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

export const inputParams = z.object({ "body": z.object({ "description": z.string().min(1).max(200).describe("A description you can use to identify the Card Profile."), "digital_wallets": z.object({ "app_icon_file_id": z.string().describe("The identifier of the File containing the card's icon image."), "background_image_file_id": z.string().describe("The identifier of the File containing the card's front image."), "card_description": z.string().min(1).max(32).describe("A user-facing description for the card itself."), "contact_email": z.string().min(1).max(32).describe("An email address the user can contact to receive support for their card.").optional(), "contact_phone": z.string().min(1).max(32).describe("A phone number the user can contact to receive support for their card.").optional(), "contact_website": z.string().describe("A website the user can visit to view and receive support for their card.").optional(), "issuer_name": z.string().min(1).max(32).describe("A user-facing description for whoever is issuing the card."), "text_color": z.object({ "blue": z.number().int().gte(0).lte(255).describe("The value of the blue channel in the RGB color."), "green": z.number().int().gte(0).lte(255).describe("The value of the green channel in the RGB color."), "red": z.number().int().gte(0).lte(255).describe("The value of the red channel in the RGB color.") }).describe("The Card's text color, specified as an RGB triple. The default is white.").optional() }).describe("How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.") }).optional() }).shape