// Shared navigation component
function renderNav(activePage) {
    const pages = [
        { id: 'dashboard', href: 'index.html', icon: '🏠', label: 'Dashboard' },
        { id: 'positions', href: 'positions.html', icon: '📊', label: 'Positions' },
        { id: 'calendar', href: 'calendar.html', icon: '📅', label: 'Calendar' },
        { id: 'stats', href: 'stats.html', icon: '📈', label: 'Stats' },
        { id: 'journal', href: 'journal.html', icon: '📓', label: 'Journal' },
        { id: 'trades', href: 'trades.html', icon: '🔍', label: 'Trades' },
    ];

    // Desktop nav
    const desktopNav = document.createElement('nav');
    desktopNav.className = 'nav-desktop';
    desktopNav.innerHTML = `<div class="nav-desktop-inner">
        <span class="nav-brand">📊 TradingHub</span>
        ${pages.map(p => `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.icon} ${p.label}</a>`).join('')}
    </div>`;

    // Mobile nav
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'nav-mobile';
    mobileNav.innerHTML = pages.map(p =>
        `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">
            <span class="nav-icon">${p.icon}</span>
            <span>${p.label}</span>
        </a>`
    ).join('');

    document.body.prepend(desktopNav);
    document.body.appendChild(mobileNav);
}
