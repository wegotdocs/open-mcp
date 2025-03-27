import { z } from "zod"

export const toolName = `updateapplication`
export const toolDescription = `Update Application`
export const baseUrl = `https://api.nexmo.com/v1/applications`
export const path = `/{app_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The ID allocated to your application by Nexmo.") }).optional(), "body": z.object({ "answer_method": z.string().describe("The HTTP method used to make the request to `answer_url`. The default value is `GET`."), "answer_url": z.string().describe("The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`.").optional(), "api_key": z.string().describe("You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)"), "api_secret": z.string().describe("You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)"), "event_method": z.string().describe("The HTTP method used to send event information to `event_url`. The default value is POST."), "event_url": z.string().describe("Nexmo sends event information asynchronously to this URL when status changes.").optional(), "name": z.string().describe("The name of your application."), "type": z.enum(["voice","messages"]).describe("The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.") }).optional() }).shape