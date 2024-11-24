import { DiscordClientInterface } from "./packages/client-discord/src/index";
import { createAgentRuntime } from "./packages/core/src/runtime";

async function main() {
    const runtime = await createAgentRuntime({
        character: {
            name: "Atlas",
            clients: ["discord"],
            // ... rest of your character config
        },
        // Add your Discord token here for testing
        settings: {
            DISCORD_API_TOKEN: process.env.DISCORD_API_TOKEN
        }
    });

    const client = await DiscordClientInterface.start(runtime);
}

main().catch(console.error);