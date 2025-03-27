import { z } from "zod";
export const toolName = `update_a_card`;
export const toolDescription = `Update a Card`;
export const baseUrl = `https://api.increase.com`;
export const path = `/cards/{card_id}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "path": z.object({ "card_id": z.string().describe("The card identifier.") }).optional(), "body": z.object({ "billing_address": z.object({ "city": z.string().min(1).max(200).describe("The city of the billing address."), "line1": z.string().min(1).max(200).describe("The first line of the billing address."), "line2": z.string().min(1).max(200).describe("The second line of the billing address.").optional(), "postal_code": z.string().min(1).max(200).describe("The postal code of the billing address."), "state": z.string().min(1).max(200).describe("The US state of the billing address.") }).describe("The card's updated billing address.").optional(), "description": z.string().min(1).max(200).describe("The description you choose to give the card.").optional(), "digital_wallet": z.object({ "card_profile_id": z.string().describe("The card profile assigned to this digital card. Card profiles may also be assigned at the program level.").optional(), "email": z.string().min(1).max(200).describe("An email address that can be used to verify the cardholder via one-time passcode over email.").optional(), "phone": z.string().min(1).max(200).describe("A phone number that can be used to verify the cardholder via one-time passcode over SMS.").optional() }).describe("The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.").optional(), "status": z.enum(["active", "disabled", "canceled"]).describe("The status to update the Card with.").optional() }).optional() }).shape;
