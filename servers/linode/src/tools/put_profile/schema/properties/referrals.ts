import { z } from "zod"

export const inputParams = {
  "code": z.string().describe("__Read-only__ Your referral code. If others use this when signing up for Linode, you receive an account credit.").readonly().optional(),
  "completed": z.number().int().describe("__Read-only__ The number of completed sign-ups that used your referral code.").readonly().optional(),
  "credit": z.number().int().describe("__Read-only__ Your referral program account credit in US dollars.").readonly().optional(),
  "pending": z.number().int().describe("__Read-only__ The number of pending sign-ups that used your referral code. Akamai gives you credit for these sign-ups once they've completed.").readonly().optional(),
  "total": z.number().int().describe("__Read-only__ The number of users who have signed up with your referral code.").readonly().optional(),
  "url": z.string().describe("__Read-only__ The referral URL that Akamai uses to direct others to sign up for Akamai Cloud Computing with your referral code.").readonly().optional()
}