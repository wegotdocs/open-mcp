import { z } from "zod"

export const toolName = `getdeploymentevents`
export const toolDescription = `Get deployment events`
export const baseUrl = `https://api.vercel.com`
export const path = `/v3/deployments/{idOrUrl}/events`
export const method = `get`
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
export const keys = {
  "query": [
    "direction",
    "follow",
    "limit",
    "name",
    "since",
    "until",
    "statusCode",
    "delimiter",
    "builds",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrUrl"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "idOrUrl": z.string().describe("The unique identifier or hostname of the deployment."),
  "direction": z.enum(["backward","forward"]).describe("Order of the returned events based on the timestamp.").optional(),
  "follow": z.union([z.literal(0), z.literal(1)]).describe("When enabled, this endpoint will return live events as they happen.").optional(),
  "limit": z.number().describe("Maximum number of events to return. Provide `-1` to return all available logs.").optional(),
  "name": z.string().describe("Deployment build ID.").optional(),
  "since": z.number().describe("Timestamp for when build logs should be pulled from.").optional(),
  "until": z.number().describe("Timestamp for when the build logs should be pulled up until.").optional(),
  "statusCode": z.any().superRefine((x, ctx) => {
    const schemas = [z.number(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("HTTP status code range to filter events by.").optional(),
  "delimiter": z.union([z.literal(0), z.literal(1)]).optional(),
  "builds": z.union([z.literal(0), z.literal(1)]).optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}