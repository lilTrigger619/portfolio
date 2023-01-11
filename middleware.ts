import { NextResponse } from "next/server";
import type { NextRequest, NextResponse } from "next/server";

export const config: { matcher: [string] } = {
  matcher: ["/", "/about"],
};

type MiddlewareType = (req: NextRequest) => NextResponse;

export const middleware: MiddlewareType = (req) => {
  const HomepageRoute = new URL("/", req.url);
  if (req.nextUrl.pathname == "/about")
    return NextResponse.rewrite(HomepageRoute);
  return NextResponse.next();
};
