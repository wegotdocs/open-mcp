import { z } from "zod";
export const inputParams = {
    "phoneCountryCode": z.string().describe("The two-character country code of the phone number.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').").optional(),
    "phoneNumber": z.string().describe("The phone number.\n>The inclusion of the phone number country code is not necessary.").optional(),
    "phoneType": z.enum(["Fax", "Landline", "Mobile", "SIP"]).describe("The type of the phone number.\n>The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.").optional()
};
