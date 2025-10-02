export const prerender = false;
import type { APIRoute } from "astro";
import {TILE_URL_PREFIX} from "../../../config.ts";

export const GET: APIRoute = async ({ params }) => {
    // params.params is a string like "z/x/y.png"
    const parts = (params.params as string).split("/");

    if (parts.length !== 3) {
        return new Response("Invalid tile request", { status: 400 });
    }

    const [z, x, yFile] = parts;
    const y = yFile.replace(".png", ""); // remove .png

    const apiKey = process.env.OS_API_KEY;

    const url = `${TILE_URL_PREFIX}/${z}/${x}/${y}.png?key=${apiKey}`;
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
        headers: { "Content-Type": "image/png" }
    });
};