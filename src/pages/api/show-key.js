// src/pages/api/check-cookie.js
export const prerender = false;
import { logger } from '../../scripts/logger.js';

export async function GET() {

    const buildVar = import.meta.env.SERVER_NAME;
    const runVar = process.env.SERVER_NAME;
    logger.info({buildVar}, `Build Var`);
    logger.info({runVar});
    logger.debug(`Mode: ${import.meta.env.MODE}`);
    logger.info({ userId: 123, action: "login" }, "words");
    return new Response(
        `<p>${buildVar}</p><p>${runVar}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}