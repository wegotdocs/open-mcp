import { z } from "zod"

export const inputParams = {
  "otp_code": z.string().describe("The one-time code received via SMS message after running the [Send a phone number verification code](https://techdocs.akamai.com/linode-api/reference/post-profile-phone-number) operation.")
}