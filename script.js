document.addEventListener('DOMContentLoaded', () => {
    // Inject Side Drawer into the page if it's an app page
    const container = document.querySelector('.app-container');
    if (container && !window.location.pathname.includes('auth.html') && !window.location.pathname.includes('signup.html')) {
        const drawerHTML = `
            <div class="drawer-overlay" id="drawerOverlay"></div>
            <div class="drawer" id="sideDrawer">
                <div class="drawer-header">
                    <div style="width: 50px; height: 50px; background: var(--primary-accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">H</div>
                    <div>
                        <h4 class="text-sm">Tengku Danial</h4>
                    </div>
                </div>
                <nav class="drawer-nav">
                    <a href="index.html" class="drawer-item"><i class="fas fa-home"></i> <span>Home</span></a>
                    <a href="calendar.html" class="drawer-item"><i class="fas fa-calendar-alt"></i> <span>Calendar</span></a>
                    <a href="profile.html" class="drawer-item"><i class="fas fa-user-circle"></i> <span>My Profile</span></a>
                    <a href="catalog.html" class="drawer-item"><i class="fas fa-th-large"></i> <span>Inventory</span></a>
                    <a href="contacts.html" class="drawer-item"><i class="fas fa-address-book"></i> <span>Contacts</span></a>
                    <a href="documents.html" class="drawer-item"><i class="fas fa-file-alt"></i> <span>Documents</span></a>
                    <a href="settings.html" class="drawer-item"><i class="fas fa-cog"></i> <span>Settings</span></a>
                    <a href="auth.html" class="drawer-item" style="margin-top: 2rem; color: #e74c3c; border-top: 1px solid var(--border-color); padding-top: 1rem;"><i class="fas fa-sign-out-alt"></i> <span>Logout</span></a>
                </nav>
            </div>
        `;
        container.insertAdjacentHTML('afterbegin', drawerHTML);
    }

    // Side Drawer Logic
    const menuBtn = document.querySelector('.fa-bars')?.parentElement;
    const overlay = document.getElementById('drawerOverlay');
    const drawer = document.getElementById('sideDrawer');

    if (menuBtn && drawer && overlay) {
        menuBtn.addEventListener('click', () => {
            drawer.classList.add('open');
            overlay.classList.add('open');
        });

        overlay.addEventListener('click', () => {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
        });
    }

    // Profile Icon Logic
    const profileBtn = document.querySelector('.fa-user')?.parentElement;
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
    }

    // Accordion Toggle Logic
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.fa-chevron-down, .fa-chevron-up');
            
            // Toggle current
            const isActive = content.classList.contains('active');
            
            // Close all others (optional, based on design pref)
            // document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            
            if (!isActive) {
                content.classList.add('active');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            } else {
                content.classList.remove('active');
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            }
        });
    });

    // Chat Auto-scroll
    const chatHistory = document.querySelector('.chat-history');
    if (chatHistory) {
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Action Buttons
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Only handle specific text for demo purposes
            const text = btn.innerText.trim();
            if (text === 'Complete Task') {
                btn.innerHTML = '<i class="fas fa-check"></i> Task Completed';
                btn.style.backgroundColor = '#2ecc71'; // Success green
                setTimeout(() => {
                    alert('Great job! Task moved to completed.');
                }, 100);
            } else if (text === 'Add Item') {
                window.location.href = 'add-item.html';
            } else if (text === 'Add New Contact') {
                window.location.href = 'add-contact.html';
            } else if (text.includes('Upload New')) {
                window.location.href = 'upload-document.html';
            }
        });
    });

    // Navigation Active State (Simple highlight based on URL)
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentPath.includes(href)) {
            item.classList.add('active');
        } else if (currentPath === '/' || currentPath.endsWith('index.html')) {
            if (href === 'index.html') {
                item.classList.add('active');
            }
        }
    });
});
