import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "commit_sha": z.string().regex(new RegExp("^[0-9a-fA-F]+$")).min(40).max(40).describe("The SHA of the commit to which the analysis you are uploading relates."),
  "ref": z.string().regex(new RegExp("^refs/(heads|tags|pull)/.*$")).describe("The full Git reference, formatted as `refs/heads/<branch name>`,\n`refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`."),
  "sarif": z.string().describe("A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see \"[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning).\""),
  "checkout_uri": z.string().url().describe("The base directory used in the analysis, as it appears in the SARIF file.\nThis property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.").optional(),
  "started_at": z.string().datetime({ offset: true }).describe("The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "tool_name": z.string().describe("The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to \"API\". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.").optional(),
  "validate": z.boolean().describe("Whether the SARIF file will be validated according to the code scanning specifications.\nThis parameter is intended to help integrators ensure that the uploaded SARIF files are correctly rendered by code scanning.").optional()
}