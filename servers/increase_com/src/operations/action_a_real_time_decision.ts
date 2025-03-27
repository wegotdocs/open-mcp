import { z } from "zod"

export const toolName = `action_a_real_time_decision`
export const toolDescription = `Action a Real-Time Decision`
export const baseUrl = `https://api.increase.com`
export const path = `/real_time_decisions/{real_time_decision_id}/action`
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

export const inputParams = z.object({ "path": z.object({ "real_time_decision_id": z.string().describe("The identifier of the Real-Time Decision.") }).optional(), "body": z.object({ "card_authorization": z.object({ "decision": z.enum(["approve","decline"]).describe("Whether the card authorization should be approved or declined.") }).describe("If the Real-Time Decision relates to a card authorization attempt, this object contains your response to the authorization.").optional(), "digital_wallet_authentication": z.object({ "result": z.enum(["success","failure"]).describe("Whether your application was able to deliver the one-time passcode.") }).describe("If the Real-Time Decision relates to a digital wallet authentication attempt, this object contains your response to the authentication.").optional(), "digital_wallet_token": z.object({ "approval": z.object({ "card_profile_id": z.string().describe("The identifier of the Card Profile to assign to the Digital Wallet token."), "email": z.string().min(1).max(200).describe("An email address that can be used to verify the cardholder via one-time passcode.").optional(), "phone": z.string().min(1).max(200).describe("A phone number that can be used to verify the cardholder via one-time passcode over SMS.").optional() }).describe("If your application approves the provisioning attempt, this contains metadata about the digital wallet token that will be generated.").optional(), "decline": z.object({ "reason": z.string().min(1).max(200).describe("Why the tokenization attempt was declined. This is for logging purposes only and is not displayed to the end-user.").optional() }).describe("If your application declines the provisioning attempt, this contains details about the decline.").optional() }).describe("If the Real-Time Decision relates to a digital wallet token provisioning attempt, this object contains your response to the attempt.").optional() }).optional() }).shape