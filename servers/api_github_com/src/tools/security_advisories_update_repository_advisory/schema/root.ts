import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory."),
  "summary": z.string().max(1024).describe("A short summary of the advisory.").optional(),
  "description": z.string().max(65535).describe("A detailed description of what the advisory impacts.").optional(),
  "cve_id": z.string().nullable().describe("The Common Vulnerabilities and Exposures (CVE) ID.").optional(),
  "vulnerabilities": z.array(z.object({ "package": z.object({ "ecosystem": z.enum(["rubygems","npm","pip","maven","nuget","composer","go","rust","erlang","actions","pub","other","swift"]).describe("The package's language or package management ecosystem."), "name": z.string().nullable().describe("The unique package name within its ecosystem.").optional() }).describe("The name of the package affected by the vulnerability."), "vulnerable_version_range": z.string().nullable().describe("The range of the package versions affected by the vulnerability.").optional(), "patched_versions": z.string().nullable().describe("The package version(s) that resolve the vulnerability.").optional(), "vulnerable_functions": z.array(z.string()).nullable().describe("The functions in the package that are affected.").optional() }).strict()).describe("A product affected by the vulnerability detailed in a repository security advisory.").optional(),
  "cwe_ids": z.array(z.string()).nullable().describe("A list of Common Weakness Enumeration (CWE) IDs.").optional(),
  "credits": z.array(z.object({ "login": z.string().describe("The username of the user credited."), "type": z.enum(["analyst","finder","reporter","coordinator","remediation_developer","remediation_reviewer","remediation_verifier","tool","sponsor","other"]).describe("The type of credit the user is receiving.") }).strict()).nullable().describe("A list of users receiving credit for their participation in the security advisory.").optional(),
  "severity": z.enum(["critical","high","medium","low"]).nullable().describe("The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.").optional(),
  "cvss_vector_string": z.string().nullable().describe("The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or `severity`.").optional(),
  "state": z.enum(["published","closed","draft"]).describe("The state of the advisory.").optional(),
  "collaborating_users": z.array(z.string()).nullable().describe("A list of usernames who have been granted write access to the advisory.").optional(),
  "collaborating_teams": z.array(z.string()).nullable().describe("A list of team slugs which have been granted write access to the advisory.").optional()
}