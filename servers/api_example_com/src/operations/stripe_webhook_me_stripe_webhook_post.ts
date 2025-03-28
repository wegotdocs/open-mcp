import { z } from "zod"

export const toolName = `stripe_webhook_me_stripe_webhook_post`
export const toolDescription = `Stripe Webhook`
export const baseUrl = `https://api.example.com`
export const path = `/me/stripe/webhook`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape