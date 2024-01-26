import { getDemoSyncsToPause } from '@nangohq/shared';

let timer: NodeJS.Timer;
// const interval = 1000 * 60 * 15; // 15 minutes
const interval = 1000 * 10;
export function pauseDemoSyncs() {
    if (timer) clearInterval(timer);
    timer = setInterval(async () => {
        const demoSyncs = await getDemoSyncsToPause();
        console.log(`[PAUSE]: pausing ${JSON.stringify(demoSyncs)}`);
        // syncOrchestrator.runSyncCommand(envId, providerConfigKey, [syncName], SyncCommand.PAUSE, connectionId);
    }, interval);
}
