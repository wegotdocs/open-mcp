import { z } from "zod";
export const inputParams = {
    "queries": z.array(z.object({ "accountId": z.string().max(128).nullable().describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(), "query": z.string().describe("The query to sanitize.") }).strict().describe("The JQL query to sanitize for the account ID. If the account ID is null, sanitizing is performed for an anonymous user.")).describe("The list of JQL queries to sanitize. Must contain unique values. Maximum of 20 queries.")
};
