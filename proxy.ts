import { NextRequest, NextResponse } from "next/server";

const ROOT_DOMAIN = process.env.ORTHOFLOW_ROOT_DOMAIN ?? "orthoflowresende.com.br";

const SUBDOMAIN_ROUTES = {
  clareamento: "/clareamento",
  implante: "/implante",
  ortodontia: "/ortodontia",
  protese: "/protese",
} as const;

const SHARED_PATHS = new Set(["/politica-de-cookies"]);
const SUBDOMAIN_PATHS = Object.values(SUBDOMAIN_ROUTES);

function getSubdomain(host: string) {
  const hostname = host.split(":")[0].toLowerCase();

  if (!hostname || hostname === "localhost") {
    return null;
  }

  if (hostname.endsWith(".localhost")) {
    return hostname.replace(/\.localhost$/, "");
  }

  const rootDomainSuffix = `.${ROOT_DOMAIN}`;

  if (!hostname.endsWith(rootDomainSuffix)) {
    return null;
  }

  const subdomain = hostname.slice(0, -rootDomainSuffix.length);
  return subdomain || null;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (SHARED_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const subdomain = getSubdomain(request.headers.get("host") ?? "");

  const isRestrictedSubdomainPath = SUBDOMAIN_PATHS.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (!subdomain && isRestrictedSubdomainPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  if (!subdomain || !(subdomain in SUBDOMAIN_ROUTES)) {
    return NextResponse.next();
  }

  const destinationPrefix =
    SUBDOMAIN_ROUTES[subdomain as keyof typeof SUBDOMAIN_ROUTES];

  if (pathname === destinationPrefix || pathname.startsWith(`${destinationPrefix}/`)) {
    return NextResponse.next();
  }

  const rewrittenUrl = request.nextUrl.clone();
  rewrittenUrl.pathname =
    pathname === "/" ? destinationPrefix : `${destinationPrefix}${pathname}`;

  return NextResponse.rewrite(rewrittenUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
