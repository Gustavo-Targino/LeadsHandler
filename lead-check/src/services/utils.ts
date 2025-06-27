import { isAxiosError } from "axios";
import type { ApiErrorResponse } from "@/models/api-error";

export function getApiErrorMessage(error: unknown): string {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.error ?? "Please try again";
  }
  return "Please try again";
}
