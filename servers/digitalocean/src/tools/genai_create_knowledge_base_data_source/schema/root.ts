import { z } from "zod"

export const inputParams = {
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "b_knowledge_base_uuid": z.string().describe("Knowledge base id").optional(),
  "spaces_data_source": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `spaces_data_source` to the tool, first call the tool `expandSchema` with \"/properties/spaces_data_source\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Spaces Bucket Data Source</property-description>").optional(),
  "web_crawler_data_source": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `web_crawler_data_source` to the tool, first call the tool `expandSchema` with \"/properties/web_crawler_data_source\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>WebCrawlerDataSource</property-description>").optional()
}