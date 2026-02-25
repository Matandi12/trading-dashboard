// ==================== SHARED DATA ====================
const DAILY_PNL = {
    "2025-12": {
        1: -194.11, 2: -137.26, 3: -9.48, 4: -9.44,
        7: -34.01, 8: -33.79, 9: -17.27, 10: -33.64, 11: -6.80,
        12: 16.10, 13: 2.65,
        14: -25.37, 15: -495.68, 16: 97.03, 17: -69.20, 18: 64.37,
        19: 635.41, 20: -2350,
        21: -573.15, 22: -41.09, 23: -74.01, 24: -32.44, 25: -442.25,
        26: 92.30, 27: -226.11,
        28: -115.78, 29: -25.25, 30: 1.05, 31: 7.14
    },
    "2026-01": {
        1: -12.06, 11: -0.82, 16: 13.54, 17: -10.46, 18: -1130,
        19: 95.20, 20: -970.32, 21: 144.59, 22: -120.23, 23: 269.81,
        24: -76.41, 25: -1400, 26: -734.83, 27: 18.66, 28: -131.32, 29: -41.04
    },
    "2026-02": {
        5: -46.56, 9: 1.75, 10: -0.92, 11: 7.21, 12: -1.29,
        13: -98.37, 14: -6.44, 18: -116.05, 19: 57.97, 20: -19.81,
        21: 188.24, 22: 46.89, 23: -465.97, 24: 221.69
    }
};

const OPEN_POSITIONS = [
    {
        pair: "CYBER/USDT", direction: "LONG", leverage: "20X", mode: "Cross",
        entry: 0.5235, markPrice: 0.5412, size: 5895.6, margin: 156.19,
        unrealizedPnl: 102.72, roi: 66.55, tp: 0.6533, sl: 0.5296,
        liqPrice: 0.3929, realizedPnl: 36.57
    }
];

// Generate TRADES from DAILY_PNL
const TRADES = [];
Object.entries(DAILY_PNL).forEach(([monthKey, days]) => {
    const [y, m] = monthKey.split('-');
    Object.entries(days).forEach(([day, pnl]) => {
        TRADES.push({
            date: `${String(day).padStart(2,'0')}/${m}/${y}`,
            pair: "Futures", dir: pnl >= 0 ? "LONG" : "SHORT",
            entry: "-", exit: "-", lev: "-", result: pnl,
            notes: "Daily PnL",
            _sort: `${monthKey}-${String(day).padStart(2,'0')}`
        });
    });
});
TRADES.sort((a, b) => a._sort.localeCompare(b._sort));

const INITIAL_ASSETS = 693.33;

// ==================== SHARED HELPERS ====================
function getAllDaysSorted() {
    const allDays = [];
    Object.entries(DAILY_PNL).forEach(([month, days]) => {
        Object.entries(days).forEach(([day, val]) => {
            allDays.push({ month, day: parseInt(day), val, sort: month+'-'+String(day).padStart(2,'0'), label: day+'/'+month.split('-')[1] });
        });
    });
    allDays.sort((a,b) => a.sort.localeCompare(b.sort));
    return allDays;
}

function formatPnl(val) {
    const prefix = val > 0 ? '+' : '';
    return prefix + '$' + val.toFixed(2);
}

function pnlColor(val) {
    return val >= 0 ? 'var(--green)' : 'var(--red)';
}

function calcStreaks(allDays) {
    let current = 0, best = 0, worst = 0, tempWin = 0, tempLoss = 0;
    for (const d of allDays) {
        if (d.val >= 0) { tempWin++; tempLoss = 0; best = Math.max(best, tempWin); }
        else { tempLoss++; tempWin = 0; worst = Math.max(worst, tempLoss); }
    }
    current = tempWin > 0 ? tempWin : -tempLoss;
    return { current, best, worst };
}

function getMonthName(mm) {
    const names = {
        "01":"January","02":"February","03":"March","04":"April","05":"May","06":"June",
        "07":"July","08":"August","09":"September","10":"October","11":"November","12":"December"
    };
    return names[mm] || mm;
}

// Particles
function initParticles() {
    for(let i=0;i<10;i++){
        const p=document.createElement('div');p.className='particle';
        p.style.left=Math.random()*100+'%';
        p.style.animationDuration=(18+Math.random()*25)+'s';
        p.style.animationDelay=Math.random()*12+'s';
        document.body.appendChild(p);
    }
}
