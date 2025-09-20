/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as aggregates from "../aggregates.js";
import type * as analytics from "../analytics.js";
import type * as attachments from "../attachments.js";
import type * as chat_http_generate_thread_name from "../chat_http/generate_thread_name.js";
import type * as chat_http_get_model from "../chat_http/get_model.js";
import type * as chat_http_image_generation from "../chat_http/image_generation.js";
import type * as chat_http_manual_stream_transform from "../chat_http/manual_stream_transform.js";
import type * as chat_http_prompt from "../chat_http/prompt.js";
import type * as chat_http_shared from "../chat_http/shared.js";
import type * as folders from "../folders.js";
import type * as http from "../http.js";
import type * as lib_backend_to_ui_messages from "../lib/backend_to_ui_messages.js";
import type * as lib_db_to_core_messages from "../lib/db_to_core_messages.js";
import type * as lib_encryption from "../lib/encryption.js";
import type * as lib_file_constants from "../lib/file_constants.js";
import type * as lib_identity from "../lib/identity.js";
import type * as lib_models from "../lib/models.js";
import type * as lib_resumable_stream_context from "../lib/resumable_stream_context.js";
import type * as lib_toolkit from "../lib/toolkit.js";
import type * as lib_tools_adapters_brave_search_adapter from "../lib/tools/adapters/brave_search_adapter.js";
import type * as lib_tools_adapters_firecrawl_search_adapter from "../lib/tools/adapters/firecrawl_search_adapter.js";
import type * as lib_tools_adapters_index from "../lib/tools/adapters/index.js";
import type * as lib_tools_adapters_search_adapter from "../lib/tools/adapters/search_adapter.js";
import type * as lib_tools_adapters_search_provider from "../lib/tools/adapters/search_provider.js";
import type * as lib_tools_adapters_serper_search_adapter from "../lib/tools/adapters/serper_search_adapter.js";
import type * as lib_tools_adapters_tavily_search_adapter from "../lib/tools/adapters/tavily_search_adapter.js";
import type * as lib_tools_mcp_adapter from "../lib/tools/mcp_adapter.js";
import type * as lib_tools_supermemory from "../lib/tools/supermemory.js";
import type * as lib_tools_web_search from "../lib/tools/web_search.js";
import type * as messages from "../messages.js";
import type * as migrations from "../migrations.js";
import type * as schema_folders from "../schema/folders.js";
import type * as schema_message from "../schema/message.js";
import type * as schema_parts from "../schema/parts.js";
import type * as schema_settings from "../schema/settings.js";
import type * as schema_streams from "../schema/streams.js";
import type * as schema_thread from "../schema/thread.js";
import type * as schema_usage from "../schema/usage.js";
import type * as settings from "../settings.js";
import type * as speech_to_text from "../speech_to_text.js";
import type * as streams from "../streams.js";
import type * as threads from "../threads.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  aggregates: typeof aggregates;
  analytics: typeof analytics;
  attachments: typeof attachments;
  "chat_http/generate_thread_name": typeof chat_http_generate_thread_name;
  "chat_http/get_model": typeof chat_http_get_model;
  "chat_http/image_generation": typeof chat_http_image_generation;
  "chat_http/manual_stream_transform": typeof chat_http_manual_stream_transform;
  "chat_http/prompt": typeof chat_http_prompt;
  "chat_http/shared": typeof chat_http_shared;
  folders: typeof folders;
  http: typeof http;
  "lib/backend_to_ui_messages": typeof lib_backend_to_ui_messages;
  "lib/db_to_core_messages": typeof lib_db_to_core_messages;
  "lib/encryption": typeof lib_encryption;
  "lib/file_constants": typeof lib_file_constants;
  "lib/identity": typeof lib_identity;
  "lib/models": typeof lib_models;
  "lib/resumable_stream_context": typeof lib_resumable_stream_context;
  "lib/toolkit": typeof lib_toolkit;
  "lib/tools/adapters/brave_search_adapter": typeof lib_tools_adapters_brave_search_adapter;
  "lib/tools/adapters/firecrawl_search_adapter": typeof lib_tools_adapters_firecrawl_search_adapter;
  "lib/tools/adapters/index": typeof lib_tools_adapters_index;
  "lib/tools/adapters/search_adapter": typeof lib_tools_adapters_search_adapter;
  "lib/tools/adapters/search_provider": typeof lib_tools_adapters_search_provider;
  "lib/tools/adapters/serper_search_adapter": typeof lib_tools_adapters_serper_search_adapter;
  "lib/tools/adapters/tavily_search_adapter": typeof lib_tools_adapters_tavily_search_adapter;
  "lib/tools/mcp_adapter": typeof lib_tools_mcp_adapter;
  "lib/tools/supermemory": typeof lib_tools_supermemory;
  "lib/tools/web_search": typeof lib_tools_web_search;
  messages: typeof messages;
  migrations: typeof migrations;
  "schema/folders": typeof schema_folders;
  "schema/message": typeof schema_message;
  "schema/parts": typeof schema_parts;
  "schema/settings": typeof schema_settings;
  "schema/streams": typeof schema_streams;
  "schema/thread": typeof schema_thread;
  "schema/usage": typeof schema_usage;
  settings: typeof settings;
  speech_to_text: typeof speech_to_text;
  streams: typeof streams;
  threads: typeof threads;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
