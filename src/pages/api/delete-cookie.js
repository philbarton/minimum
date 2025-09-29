// src/pages/api/delete-cookie.js
export const prerender = false;

export async function GET() {
    return new Response("<p>Cookie deleted ❌</p>", {
        status: 200,
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "user=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict"
        }
    });
}