import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const maintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  if (
    maintenanceMode &&
    !pathname.startsWith("/maintenance") &&
    !pathname.startsWith("/_next")
  ) {
    const response = NextResponse.rewrite(
      new URL("/maintenance", request.url),
    );
    response.headers.set("x-middleware-status", "503");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
