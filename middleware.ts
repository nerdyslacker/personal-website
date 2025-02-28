import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Runs on every page
export function middleware (request: NextRequest) {
  if (request.nextUrl.pathname === '/.well-known/webfinger') {

    const mastodon = {
        "subject":"acct:nerdyslacker@mastodon.social",
        "aliases":
        [
            "https://mastodon.social/@nerdyslacker",
            "https://mastodon.social/users/nerdyslacker"
        ],
        "links":
        [
            {
                "rel":"http://webfinger.net/rel/profile-page",
                "type":"text/html",
                "href":"https://mastodon.social/@nerdyslacker"
            },
            {
                "rel":"self",
                "type":"application/activity+json",
                "href":"https://mastodon.social/users/nerdyslacker"
            },
            {
                "rel":"http://ostatus.org/schema/1.0/subscribe",
                "template":"https://mastodon.social/authorize_interaction?uri={uri}"
            }
        ]
    }

    const response = NextResponse.json(mastodon)
    return response
  }
}