export const prerender = false;
import { logger } from '../../scripts/logger.js';

export async function GET({cookies}) {
    cookies.set("user", "astro-htmx", {
        path: "/",
        httpOnly: true,
        secure: true, // enable in production (HTTPS only)
        maxAge: 60 * 60 * 24, // 1 day
    });
    logger.debug('debug message')
    logger.error('error message')
    return new Response("<p>Cookie set ✅</p>", {
        status: 200,
        headers: {
            "Content-Type": "text/html"
        }
    });
}