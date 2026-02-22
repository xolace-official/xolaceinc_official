import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";

export function proxy(req: NextRequest) {
  logger.info("Page visit", {
    path: req.nextUrl.pathname,
    method: req.method,
  });

  return NextResponse.next();
}