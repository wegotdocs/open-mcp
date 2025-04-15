import { z } from "zod"

export const inputParams = {
  "apache": z.boolean().describe("__Read-only__ If `true`, the Apache Longview Client module is monitoring Apache on your server.").readonly().optional(),
  "mysql": z.boolean().describe("__Read-only__ If `true`, the MySQL Longview Client modules is monitoring MySQL on your server.").readonly().optional(),
  "nginx": z.boolean().describe("__Read-only__ If `true`, the Nginx Longview Client module is monitoring Nginx on your server.").readonly().optional()
}