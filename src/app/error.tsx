"use client";

import { useEffect } from "react";
import {logClientError} from "@/lib/log-errors";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    logClientError(error.message, error.stack);
  }, [error]);

  return <div>Something went wrong.</div>;
}