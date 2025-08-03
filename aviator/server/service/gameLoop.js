// server/gameLoop.js
let interval = null;
let multiplier = 1.0;

export function startGame(io) {
    if (interval) return; // Avoid multiple intervals

    multiplier = 1.0;
    interval = setInterval(() => {
        multiplier = parseFloat((multiplier + 0.01).toFixed(2));
        io.emit('game:multiplier', multiplier);

        // Simulate crash condition (can adjust probability or add fixed crash point)
        if (Math.random() < 0.01 || multiplier >= 10) {
            io.emit('game:crash');
            clearInterval(interval);
            interval = null;
        }
    }, 100); // update every 100ms
}

export function stopGame(io) {
    io.emit('game:crash'); // treat stop as crash for now
    clearInterval(interval);
    interval = null;
}
