// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET({ request }) {
    const cookie = request.headers.get("cookie") || "";
    const hasUser = cookie.includes("user=astro-htmx");

    return new Response(
        `<p>Cookie exists? ${hasUser ? "✅ Yes" : "❌ No"}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}