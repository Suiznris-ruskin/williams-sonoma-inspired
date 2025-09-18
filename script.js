// Williams-Sonoma Inspired Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initCartFunctionality();
    initNewsletterForms();
    initSearchFunctionality();
    initMobileMenu();
    initProductHoverEffects();
});

function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DXR000001TWaF',
				'WSI_Default',
				'https://orgfarm-1baaa895a1.test1.my.pc-rnd.site.com/ESWWSIDefault1758179645269',
				{
					scrt2URL: 'https://orgfarm-1baaa895a1.test1.my.pc-rnd.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Cart functionality
function initCartFunctionality() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            
            // Add visual feedback
            this.textContent = 'Added!';
            this.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '#2c5530';
            }, 1500);
            
            // Add cart animation
            animateCartIcon();
        });
    });
}

// Animate cart icon when item is added
function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    cartIcon.style.color = '#2c5530';
    
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.color = '#333';
    }, 300);
}

// Newsletter form functionality
function initNewsletterForms() {
    const newsletterForms = document.querySelectorAll('.newsletter-form, .footer-newsletter');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const button = this.querySelector('button');
            
            if (emailInput.value && isValidEmail(emailInput.value)) {
                // Simulate successful subscription
                button.textContent = 'Subscribed!';
                button.style.backgroundColor = '#28a745';
                emailInput.value = '';
                
                setTimeout(() => {
                    button.textContent = 'Subscribe';
                    button.style.backgroundColor = '';
                }, 2000);
                
                showNotification('Thank you for subscribing!', 'success');
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Search functionality
function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-box input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    showNotification(`Searching for: "${searchTerm}"`, 'info');
                    // In a real application, this would trigger a search
                }
            }
        });
        
        // Add focus/blur effects
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.05)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    // Create mobile menu button
    const headerMain = document.querySelector('.header-main');
    const mainNav = document.querySelector('.main-nav');
    
    // Add mobile menu button
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.style.display = 'none';
    
    headerMain.appendChild(mobileMenuButton);
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        mainNav.classList.toggle('mobile-menu-open');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Show/hide mobile menu button based on screen size
    function toggleMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuButton.style.display = 'block';
            mainNav.classList.add('mobile-nav');
        } else {
            mobileMenuButton.style.display = 'none';
            mainNav.classList.remove('mobile-nav', 'mobile-menu-open');
        }
    }
    
    window.addEventListener('resize', toggleMobileMenu);
    toggleMobileMenu();
}

// Product hover effects
function initProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'info':
        default:
            notification.style.backgroundColor = '#2c5530';
            break;
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #2c5530;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollToTopButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#1e3a21';
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#2c5530';
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top
initScrollToTop();

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .mobile-menu-button {
            background: none;
            border: none;
            font-size: 24px;
            color: #333;
            cursor: pointer;
            padding: 10px;
        }
        
        .mobile-nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .mobile-nav.mobile-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .mobile-nav ul {
            flex-direction: column;
            padding: 20px;
            gap: 15px;
        }
        
        .mobile-nav .nav-link {
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
    }
`;

// Add mobile menu CSS to the page
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);
