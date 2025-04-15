import { z } from "zod"

export const inputParams = {
  "authentication_type": z.enum(["password","github"]).describe("__Read-only__ This account's Cloud Manager authentication type. You choose an authentication type in Cloud Manager and Akamai authorizes it when you log into your account. Authentication types include your user's password (in conjunction with your username), or the name of your identity provider, such as GitHub. Here are some examples:\n\n- If a user has never used third-party authentication, the authentication type will be `password`.\n\n- If a user is using third-party authentication, the name of their identity provider is used for the authentication type, for example, `github`.\n\n- If a user has used third-party authentication and has since revoked it, the authentication type is `password`.").readonly().optional(),
  "authorized_keys": z.array(z.string()).nullable().describe("Your user can use these SSH Keys to access Lish. This value is ignored if `lish_auth_method` is `disabled`.").optional(),
  "email": z.string().email().describe("Your email address. We use this address for Akamai Cloud Computing-related communication.").optional(),
  "email_notifications": z.boolean().describe("When set to `true`, you will receive email notifications about account activity. When `false`, you may still receive business-critical communications through email.").optional(),
  "lish_auth_method": z.enum(["password_keys","keys_only","disabled"]).describe("The authentication methods that you can use when connecting to the [Linode Shell (Lish)](https://www.linode.com/docs/guides/lish/).\n\n- `keys_only` is the most secure if you intend to use Lish.\n\n- `disabled` is recommended if you don't want to use Lish.\n\n- If this account's Cloud Manager authentication type is set to a third-party authentication method, you can't use `password_keys` as your Lish authentication method. Run the [Get a profile](https://techdocs.akamai.com/linode-api/reference/get-profile) operation to view your account's Cloud Manager `authentication_type` field.").optional(),
  "referrals": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `referrals` to the tool, first call the tool `expandSchema` with \"/properties/referrals\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>__Read-only__ Information about your status in our referral program. The API makes this information available after this profile's account has established at least $25.00 USD of total payments.</property-description>").optional(),
  "restricted": z.boolean().describe("When set to `true`, there are restrictions on what your user can access on your account. Run [List grants](https://techdocs.akamai.com/linode-api/reference/get-profile-grants) to get details on what entities and actions you can access and perform.").optional(),
  "timezone": z.string().describe("The time zone you want to display for your Linode assets. This API doesn't directly use this time zone. It's provided for the benefit of clients such as the Akamai Cloud Manager and other clients built on the API. All times returned by the API are in UTC.").optional(),
  "two_factor_auth": z.boolean().describe("When set to `true`, a login from an untrusted computer requires two-factor authentication. You also need to run [Create a two factor secret](https://techdocs.akamai.com/linode-api/reference/post-tfa-enable) to enable two-factor authentication.").optional(),
  "uid": z.number().int().describe("__Read-only__ Your unique ID in our system. This value will never change, and can safely be used to identify your user.").readonly().optional(),
  "username": z.string().describe("__Read-only__ Your username, used for logging in to our system.").readonly().optional(),
  "verified_phone_number": z.string().nullable().describe("__Read-only__ The phone number verified for this profile with the [Verify a phone number](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number-verify) operation. Displayed as `null` if the profile doesn't have a verified phone number.").readonly().optional()
}