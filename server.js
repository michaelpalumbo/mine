const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `pool.etnminers.com`,
        port: 3333,
        username: `etnkMEQ4m2dBjs1ThK6uveY5M2wFrxGQh4teN1yfLJNREz4ZyMGMT17KH9PQtLNSjBTxQ6wnyiPumG1hRgCZRmxX2oYQCHN7Qh`,
        password: 'node'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();