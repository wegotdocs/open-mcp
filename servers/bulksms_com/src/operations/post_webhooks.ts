import { z } from "zod"

export const toolName = `post_webhooks`
export const toolDescription = `Create a webhook`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/webhooks`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "body": z.object({ "active": z.boolean().describe("Indicates whether you want the webhook activated.\n\nIf the value is `true`, the webhook at the given `url` will be invoked with an empty array (`[]`) as part of the validation process.\nIf the webhook responds with a `2xx` status code, the submission is accepted; if not the webhook is not created (or updated).\n\nIf the value is `false` the webhook will be inactive, and it will not be invoked when messages are `SENT` or `RECEIVED`.\n\nThe default value is `true`.\n").optional(), "contactEmailAddress": z.string().describe("The email address to which emails will be sent if there are problem with invoking the webhook.\n\nThe value must be a valid email address.\nIf this value is `null`, no email will be sent.\n\nIt is `null` by default.\n").optional(), "invokeOption": z.enum(["ONE","MANY"]).describe("Specifies how to invoke your webhook.\n\nIf the value is `ONE` the array POSTed to your webhook will contain no more than a single message.  Use this option if your webhook logic is unable to handle more than one messages at a time.\n\nIf the value is `MANY` the array POSTed to your webhook can contain up to 10 messages.  This is the recommended option.  The number of calls made to your webhook would be less and this will speed up your total processing time.\nIf your webhook fails for an invoke that has more than one message, each message in the array will automatically be retried one at a time. \n\nThis value defaults to `ONE` - but it is recommended that you set this property to `MANY`.\n").optional(), "name": z.string().describe("A text identifier for the webhook.\nMore than one webhook cannot have the same name.\n"), "onWebApp": z.boolean().describe("Indicates whether you want to show this webhook on the Web App.\n\nWebhooks shown there can be updated by the user that use the public Web site.\n\nThe default value is `true`.\n").optional(), "triggerScope": z.enum(["SENT","RECEIVED"]).describe("Specifies when the webhook will be triggered.  \n\nPlease note the values are case sensitive.\n\nIf the value is `SENT`, the webhook will be called when a status update becomes available for a message you sent (i.e. a mobile terminating (MT) message).\n\nIf the value is `RECEIVED`, the webhook will be called when a message is received (i.e. a mobile originating (MO) message).\n\nNote that this field forces you to create two separate webhook entries if you want to collect all messages.  However,  you can use the same `url` for both webhooks if you want.\n"), "url": z.string().describe("The location of the webhook.\n\nIn addition to being a [valid URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax), the url must also start with `http` or `https`.\n") }).optional() }).shape