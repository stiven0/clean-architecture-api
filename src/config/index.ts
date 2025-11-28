import "dotenv/config";

export const CONFIG_ENVIRONMENT = {
    PORT: process.env.PORT ?? 3000,
    API_URL: process.env.API_URL ?? ''
}