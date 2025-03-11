const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// Add click event to toggle the 'active' class on the hamburger and 'show' class on the nav list
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active'); // Toggle X shape
navList.classList.toggle('show'); // Show/Collapse nav list
}); 
document.addEventListener('DOMContentLoaded', function() {
    // Get the password input and checkbox elements
    const passwordInput = document.querySelector('input[type="password"]');
    const checkbox = document.querySelector('#cbx-46');

    // Add event listener to checkbox
    checkbox.addEventListener('change', function() {
        // If checkbox is checked, show password, otherwise hide it
        passwordInput.type = this.checked ? 'text' : 'password';
    });
});
function togglePassword() {
    var passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.news-container');
    const items = document.querySelectorAll('.news-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

     // Determine items per slide based on screen width
    const getItemsPerSlide = () => window.innerWidth <= 768 ? 1 : 2;
    let itemsPerSlide = getItemsPerSlide();

    // Update dots visibility and active state
    function updateDots() {
    const isMobile = window.innerWidth <= 768;
    
    // Show/hide dots based on screen size
    dots.forEach((dot, index) => {
        if (isMobile) {
            // Show all dots on mobile
            dot.style.display = 'inline-block';
            dot.classList.toggle('active', index === currentIndex);
        } else {
            // Show only first two dots on desktop
            if (index < 2) {
                dot.style.display = 'inline-block';
                dot.classList.toggle('active', index === Math.floor(currentIndex / 2));
            } else {
                dot.style.display = 'none';
            }
        }
    });
}

// Slide to specific index
function slideTo(index) {
    const slideWidth = items[0].offsetWidth + (window.innerWidth <= 768 ? 0 : 30);
    container.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
    updateDots();
}

// Next slide
function nextSlide() {
    const maxIndex = items.length - itemsPerSlide;
    if (currentIndex < maxIndex) {
        slideTo(currentIndex + itemsPerSlide);
    } else {
        slideTo(0); // Loop back to start
    }
}

// Previous slide
function prevSlide() {
    if (currentIndex > 0) {
        slideTo(currentIndex - itemsPerSlide);
    } else {
        slideTo(items.length - itemsPerSlide); // Loop to end
    }
}


// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            slideTo(index);
        } else {
            slideTo(index * 2);
        }
    });
});


// Handle responsive layouts
window.addEventListener('resize', () => {
    itemsPerSlide = getItemsPerSlide();
    updateDots();
    slideTo(Math.floor(currentIndex / itemsPerSlide) * itemsPerSlide);
});

// Initialize dots on page load
updateDots();
});


document.addEventListener('DOMContentLoaded', function() {
    const policyLinks = document.querySelectorAll('.policy-link');
    
    policyLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            const linkType = this.textContent;
            let popupContent = '';

            if (linkType === 'Privacy Policy') {
                popupContent = `
                <div style="text-align: justify;">
                    <center> <h3 style="color: #158BDA;";>Privacy Policy</h3> </center>
                    <br>
                    <p>
                        We value your privacy. This policy explains how we collect, use, and protect your information when you visit our website.
                        By accessing our website, you agree to the terms outlined in this policy.
                    </p>
                    <br>    
                    <center> <h3 style="color: #158BDA;";>Information We Collect</h3> </center>
                    <br>
                    <p>We may collect your name, email, and contact details when you register, subscribe to updates, or communicate with us.</p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>How We Use your Information</h3> </center>
                    <br>
                    <p>Your data helps us improve our services, respond to inquiries, and provide important updates.</p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>How We Use your Information</h3> </center>
                    <br>
                    <p>We take strong measures to keep your information safe and comply with relevant data protection laws.</p>
                </div>    
                `;
                
            } else if (linkType === 'Terms of Use') {
                popupContent = `
                    <center> <h3 style="color: #158BDA;";>Terms of Use</h3> </center>
                    <br>
                    <p>
                        This website is a student project created and maintained by a student of Talisay City College for educational purposes.
                        While efforts are made to provide accurate information, please note that this site is not an official platform of Talisay City College. 
                        By accessing our website, you agree to the following terms to ensure a safe, respectful, and positive experience for all users.
                    </p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>Acceptable Use</h3> </center>
                    <br>
                    <p>
                        To maintain a secure environment, users are expected to:
                    </p>
                    <ul>
                        <li>Respect other users</li>
                        <li>Refrain from posting inappropriate content</li>
                        <li>Use the website for educational purposes only</li>
                        <li>Refrain from posting inappropriate content</li> 
                    </ul>    
                    <br>
                    <center> <h3 style="color: #158BDA;";>Intellectual Property</h3> </center>
                    <br>
                    <p>All content, including text, images, graphics, and design elements, is the property of Talisay City College unless otherwise stated.
                    Unauthorized use, reproduction, or distribution of our materials without proper consent is strictly prohibited.
                    </p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>User Contributions</h3> </center>
                    <br>
                    <p>
                        If you submit content to our website, you agree to provide accurate information and ensure that your contributions do not infringe on the rights of others.
                        We reserve the right to remove any inappropriate content.
                    </p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>Termination</h3> </center>
                    <br>
                    <p>
                        We reserve the right to restrict, suspend, or terminate access to users who violate these terms, harm the website,
                        or act against the interests of Talisay City College.
                    </p>
                `;
            } else if (linkType === 'Legal') {
                popupContent = `
                    <center> <h3 style="color: #158BDA;";>Legal Information</h3> </center>
                    <br>
                    <p>Talisay City College follows legal regulations to ensure a safe learning environment and protect all users' rights.</p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>Compliance</h3> </center>
                    <br>
                    <p>We adhere to local and international laws regarding education, privacy, and online services.</p>
                    <br>
                    <center> <h3 style="color: #158BDA;";>Liability</h3> </center>
                    <br>
                    <p>While we strive to provide accurate information, we are not responsible for errors or omissions in website content.</p>
                `;
            }

            const popup = document.createElement('div');
            popup.className = 'policy-popup';
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-popup">&times;</span>
                    ${popupContent}
                </div>
            `;

            document.body.appendChild(popup);

            // Close popup when clicking the "X"
            popup.querySelector('.close-popup').addEventListener('click', () => {
                popup.remove();
            });

            // Close popup when clicking outside the content
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.remove();
                }
            });
        });
    });
});
