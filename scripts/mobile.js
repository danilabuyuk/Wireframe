        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        mobileMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
            }
        });


        const guideTabs = document.querySelectorAll('.guide-tab');
        const guideContents = document.querySelectorAll('.guide-content');

        guideTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.dataset.target;

                guideTabs.forEach(t => t.classList.remove('active-guide-tab', 'hover:bg-gray-800'));
                tab.classList.add('active-guide-tab');
                
                guideContents.forEach(content => {
                    if (content.id === targetId) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
            });
        });

