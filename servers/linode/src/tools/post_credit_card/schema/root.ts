import { z } from "zod"

export const inputParams = {
  "card_number": z.string().min(14).max(24).describe("Your credit card number. No spaces or hyphens (`-`) allowed."),
  "cvv": z.string().min(3).max(4).describe("CVV (Card Verification Value) of the credit card, typically found on the back of the card."),
  "expiry_month": z.number().int().gte(1).lte(12).describe("A value from 1-12 representing the expiration month of your credit card.\n\n  - 1 = January\n  - 2 = February\n  - 3 = March\n  - Etc."),
  "expiry_year": z.number().int().describe("A four-digit integer representing the expiration year of your credit card.\n\nThe combination of `expiry_month` and `expiry_year` must result in a month/year combination of the current month or in the future. An expiration date set in the past is invalid.")
}