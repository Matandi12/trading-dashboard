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
        21: 188.24, 22: 46.89, 23: -465.97, 24: 221.69, 25: -1070.86
    }
};

const OPEN_POSITIONS = [
    {
        pair: "DOT/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 1.63,
        current: 1.599,
        tp1: 1.5811,
        tp2: 1.5322,
        tp3: 1.4833,
        sl: 1.6789,
        pnl: 19.02,
        tpHits: 0,
        openTime: "1772079390223",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "BTC/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 68588.16,
        current: 68434.78,
        tp1: 66530.5152,
        tp2: 64472.8704,
        tp3: 62415.2256,
        sl: 70645.8048,
        pnl: 2.24,
        tpHits: 0,
        openTime: "1772079379700",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "BNB/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 627.09,
        current: 627.1,
        tp1: 608.2773,
        tp2: 589.4646,
        tp3: 570.6519,
        sl: 645.9027,
        pnl: -0.02,
        tpHits: 0,
        openTime: "1772075486060",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "ETH/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 2049.73,
        current: 2072.04,
        tp1: 1988.2381,
        tp2: 1926.7462,
        tp3: 1865.2543,
        sl: 2111.2219,
        pnl: -10.88,
        tpHits: 0,
        openTime: "1772075479678",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "NEAR/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 1.157,
        current: 1.135,
        tp1: 1.1223,
        tp2: 1.0876,
        tp3: 1.0529,
        sl: 1.1917,
        pnl: 19.01,
        tpHits: 0,
        openTime: "1772073693559",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "UNI/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 3.995,
        current: 4.001,
        tp1: 3.8752,
        tp2: 3.7553,
        tp3: 3.6355,
        sl: 4.1149,
        pnl: -1.5,
        tpHits: 0,
        openTime: "1772071014886",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "SOL/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 88.59,
        current: 87.65,
        tp1: 85.4894,
        tp2: 82.3887,
        tp3: 79.731,
        sl: 91.6906,
        pnl: 10.61,
        tpHits: 0,
        openTime: "1772070992062",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "AVAX/USDT",
        direction: "SHORT",
        leverage: "10X",
        entry: 9.581,
        current: 9.34,
        tp1: 9.2936,
        tp2: 9.0061,
        tp3: 8.7187,
        sl: 9.8684,
        pnl: 25.15,
        tpHits: 0,
        openTime: "1772065896037",
        status: "OPEN",
        notes: "Bot signal"
    },
    {
        pair: "XRP/USDT",
        direction: "LONG",
        leverage: "10X",
        entry: 1.38,
        current: 1.448,
        tp1: 1.4214,
        tp2: 1.4628,
        tp3: 1.5042,
        sl: 1.3386,
        pnl: 49.28,
        tpHits: 2,
        openTime: "1772013083554",
        status: "OPEN",
        notes: "Bot signal"
    },
];

// ==================== DETAILED TRADE LOG ====================
const DETAILED_TRADES = [
    {
        id: 4,
        pair: "DOGE/USDT",
        direction: "SHORT",
        leverage: "10X",
        mode: "Cross",
        entry: 0.1016,
        exit: null,
        size: 0,
        sizeUnit: "DOGE",
        pnl: 0,
        roi: 0,
        tp: 0.0985,
        sl: 0.1046,
        openTime: "2026-02-25 16:01:00",
        closeTime: null,
        duration: "Open",
        status: "OPEN",
        notes: "Bot signal — 4/4 Wyckoff confirmations. RSI 69, EMA bearish, MACD negative, volume declining."
    },
    {
        id: 3,
        pair: "Multiple",
        direction: "SHORT",
        leverage: "High",
        mode: "Cross",
        entry: 0,
        exit: 0,
        size: 0,
        sizeUnit: "",
        pnl: -1070.86,
        roi: -111.71,
        tp: null,
        sl: null,
        openTime: "2026-02-25 09:00:00",
        closeTime: "2026-02-25 20:00:00",
        duration: "~11h",
        status: "LIQUIDATED",
        notes: "⚠️ Manual revenge shorts against +11% rally. Multiple liquidations. Account $694→$36. Lesson: NEVER trade manually against the trend."
    },
    {
        id: 2,
        pair: "CYBER/USDT",
        direction: "LONG",
        leverage: "20X",
        mode: "Cross",
        entry: 0.5235,
        exit: 0.5396,
        size: 7860.8,
        sizeUnit: "CYBER",
        pnl: 127.73,
        roi: 62.07,
        tp: null,
        sl: null,
        openTime: "2026-02-24 11:47:26",
        closeTime: "2026-02-25 02:00:09",
        duration: "14h 12m",
        status: "TP HIT",
        notes: "Clean long. Both CYBER and SOL closed same day."
    },
    {
        id: 1,
        pair: "SOL/USDT",
        direction: "LONG",
        leverage: "60X",
        mode: "Cross",
        entry: 76.65,
        exit: 77.83,
        size: 319.58,
        sizeUnit: "SOL",
        pnl: 351.15,
        roi: 86.00,
        tp: null,
        sl: null,
        openTime: "2026-02-24 11:41:41",
        closeTime: "2026-02-25 03:12:26",
        duration: "15h 30m",
        status: "TP HIT",
        notes: "TP hit perfectly. Clean trade."
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
