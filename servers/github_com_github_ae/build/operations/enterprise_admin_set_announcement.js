import { z } from "zod";
export const toolName = `enterprise_admin_set_announcement`;
export const toolDescription = `Set the global announcement banner`;
export const baseUrl = `https://github.com`;
export const path = `/enterprise/announcement`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "announcement": z.string().nullable().describe("The announcement text in GitHub Flavored Markdown. For more information about GitHub Flavored Markdown, see \"[Basic writing and formatting syntax](https://docs.github.com/github-ae@latest/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).\""), "expires_at": z.string().datetime({ offset: true }).nullable().describe("The time at which the announcement expires. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. To set an announcement that never expires, omit this parameter, set it to `null`, or set it to an empty string.").optional() }).describe("Enterprise global announcement").optional() }).shape;
