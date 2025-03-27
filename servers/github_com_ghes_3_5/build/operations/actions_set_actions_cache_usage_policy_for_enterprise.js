import { z } from "zod";
export const toolName = `actions_set_actions_cache_usage_policy_for_enterprise`;
export const toolDescription = `Set GitHub Actions cache usage policy for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/cache/usage-policy`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "max_repo_cache_size_limit_in_gb": z.number().int().describe("For repositories in an enterprise, the maximum value that can be set as the limit for the sum of all caches in a repository, in gigabytes.").optional(), "repo_cache_size_limit_in_gb": z.number().int().describe("For repositories in an enterprise, the default size limit for the sum of all caches in a repository, in gigabytes.").optional() }).describe("GitHub Actions cache usage policy for an enterprise.").optional() }).shape;
