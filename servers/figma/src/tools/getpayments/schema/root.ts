import { z } from "zod"

export const inputParamsSchema = {
  "plugin_payment_token": z.string().describe("Short-lived token returned from \"getPluginPaymentTokenAsync\" in the plugin payments API and used to authenticate to this endpoint. Read more about generating this token through \"Calling the Payments REST API from a plugin or widget\" below.").optional(),
  "user_id": z.number().describe("The ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API.").optional(),
  "community_file_id": z.number().describe("The ID of the Community file to query a user's payment information on. You can get the Community file ID from the file's Community page (look for the number after \"file/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".").optional(),
  "plugin_id": z.number().describe("The ID of the plugin to query a user's payment information on. You can get the plugin ID from the plugin's manifest, or from the plugin's Community page (look for the number after \"plugin/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".").optional(),
  "widget_id": z.number().describe("The ID of the widget to query a user's payment information on. You can get the widget ID from the widget's manifest, or from the widget's Community page (look for the number after \"widget/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".").optional()
}