"use server";
import logger from "@/lib/logger";

export async function logClientError(message: string, stack?: string) {
  logger.error(`[Client] ${message}`, { stack });
}