import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    // Return a random number
    const data = { number: Math.floor(Math.random() * 100) };
    await new Promise((resolve) => setTimeout(resolve, 500));
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
};