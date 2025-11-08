// জাতীয় সঙ্গীত প্লে/পজ করার ফাংশন
document.addEventListener('DOMContentLoaded', function() {
    const anthemBtn = document.getElementById('anthem-btn');
    const anthemAudio = document.getElementById('anthem-audio');
    let isPlaying = false;
    
    if (anthemBtn && anthemAudio) {
        anthemBtn.addEventListener('click', function() {
            if (isPlaying) {
                anthemAudio.pause();
                anthemBtn.innerHTML = '<i class="fas fa-play"></i> জাতীয় সঙ্গীত বাজান';
                isPlaying = false;
            } else {
                anthemAudio.play();
                anthemBtn.innerHTML = '<i class="fas fa-pause"></i> জাতীয় সঙ্গীত বন্ধ করুন';
                isPlaying = true;
            }
        });
        
        // অডিও শেষ হলে বোতাম টেক্সট রিসেট
        anthemAudio.addEventListener('ended', function() {
            anthemBtn.innerHTML = '<i class="fas fa-play"></i> জাতীয় সঙ্গীত বাজান';
            isPlaying = false;
        });
    }
    
    // শিক্ষকদের বিস্তারিত তথ্য টগল ফাংশন
document.addEventListener('DOMContentLoaded', function() {
    // "বিস্তারিত দেখুন" বাটন ক্লিক ইভেন্ট
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    const seeLessButtons = document.querySelectorAll('.see-less-btn');
    
    // বিস্তারিত দেখুন বাটন ফাংশন - খোলার ফাংশন
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetId = this.getAttribute('data-target');
            openTeacherDetails(targetId);
        });
    });
    
    // কম দেখান বাটন ফাংশন - বন্ধ করার ফাংশন
    seeLessButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetId = this.getAttribute('data-target');
            closeTeacherDetails(targetId);
        });
    });
    
    // শিক্ষকের বিস্তারিত তথ্য খোলার ফাংশন
    function openTeacherDetails(targetId) {
        const detailsSection = document.getElementById(targetId);
        const teacherCard = detailsSection ? detailsSection.closest('.teacher-card') : null;
        
        if (detailsSection && teacherCard) {
            // প্রথমে সব ডিটেইলস বন্ধ করুন
            closeAllTeacherDetails();
            
            // তারপর বর্তমানটি খুলুন
            detailsSection.classList.add('show');
            teacherCard.classList.add('active');
            
            // স্মুথ স্ক্রলিং এফেক্ট
            setTimeout(() => {
                detailsSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest',
                    inline: 'nearest'
                });
            }, 300);
            
            // বাটনের টেক্সট পরিবর্তন (যদি প্রয়োজন হয়)
            const seeMoreBtn = teacherCard.querySelector('.see-more-btn');
            if (seeMoreBtn) {
                seeMoreBtn.style.display = 'none';
            }
        }
    }
    
    // নির্দিষ্ট শিক্ষকের বিস্তারিত তথ্য বন্ধ করার ফাংশন
    function closeTeacherDetails(targetId) {
        const detailsSection = document.getElementById(targetId);
        const teacherCard = detailsSection ? detailsSection.closest('.teacher-card') : null;
        
        if (detailsSection && teacherCard) {
            detailsSection.classList.remove('show');
            teacherCard.classList.remove('active');
            
            // বাটনের টেক্সট ফিরিয়ে আনা
            const seeMoreBtn = teacherCard.querySelector('.see-more-btn');
            if (seeMoreBtn) {
                seeMoreBtn.style.display = 'flex';
            }
            
            // শিক্ষক কার্ডে স্ক্রল ব্যাক
            setTimeout(() => {
                teacherCard.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }, 300);
        }
    }
    
    // সব শিক্ষক ডিটেইলস বন্ধ করার ফাংশন
    function closeAllTeacherDetails() {
        const allDetails = document.querySelectorAll('.teacher-details');
        const allTeacherCards = document.querySelectorAll('.teacher-card');
        const allSeeMoreBtns = document.querySelectorAll('.see-more-btn');
        
        allDetails.forEach(detail => {
            detail.classList.remove('show');
        });
        
        allTeacherCards.forEach(card => {
            card.classList.remove('active');
        });
        
        allSeeMoreBtns.forEach(btn => {
            btn.style.display = 'flex';
        });
    }
    
    // বাইরে ক্লিক করলে ডিটেইলস বন্ধ হওয়ার ফাংশন
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.teacher-card') && 
            !event.target.classList.contains('see-more-btn') &&
            !event.target.classList.contains('see-less-btn')) {
            closeAllTeacherDetails();
        }
    });

    // ESC কী প্রেস করলে বন্ধ হওয়ার ফাংশন
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllTeacherDetails();
        }
    });

    // ফর্ম সাবমিশন হ্যান্ডলার
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // ফর্ম ডেটা সংগ্রহ
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // এখানে সাধারণত সার্ভারে ডেটা পাঠানো হবে
            // এখন শুধু একটি এলার্ট দেখানো হচ্ছে
            alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।');
            
            // ফর্ম রিসেট
            feedbackForm.reset();
        });
    }
    
    // নেভিগেশন মেনু সক্রিয় করা
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sectionsIds = ['home', 'about', 'founder', 'teachers', 'students', 'results', 'gallery', 'contact', 'notices'];
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sectionsIds.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= (sectionTop - 100)) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === #${current}) {
                link.classList.add('active');
            }
        });
        
        // ব্যাক টু টপ বাটন দেখানো/লুকানো
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        }
    });
    
    // মসৃণ স্ক্রলিং
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ব্যাক টু টপ বাটন ফাংশন
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // স্ক্রল অ্যানিমেশন
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // অ্যানিমেশন যোগ করার জন্য এলিমেন্ট সিলেক্ট করা
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-element');
        observer.observe(section);
    });
});

// ফেড-ইন অ্যানিমেশনের জন্য CSS যোগ করা
const style = document.createElement('style');
style.textContent = `
    .fade-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// গ্লোবাল ফাংশন হিসেবে টগল ফাংশন যোগ করা (যদি প্রয়োজন হয়)
function toggleTeacherDetails(teacherId) {
    const detailsSection = document.getElementById(teacher-detail-${teacherId});
    if (detailsSection) {
        if (detailsSection.classList.contains('show')) {
            closeTeacherDetails(teacher-detail-${teacherId});
        } else {
            openTeacherDetails(teacher-detail-${teacherId});
        }
    }
}

// গ্লোবাল ফাংশন ডিক্লেয়ারেশন (যদি বাইরে থেকে কল করতে চান)
window.openTeacherDetails = function(targetId) {
    const detailsSection = document.getElementById(targetId);
    const teacherCard = detailsSection ? detailsSection.closest('.teacher-card') : null;
    
    if (detailsSection && teacherCard) {
        closeAllTeacherDetails();
        detailsSection.classList.add('show');
        teacherCard.classList.add('active');
        
        setTimeout(() => {
            detailsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest'
            });
        }, 300);
    }
};

window.closeTeacherDetails = function(targetId) {
    const detailsSection = document.getElementById(targetId);
    const teacherCard = detailsSection ? detailsSection.closest('.teacher-card') : null;
    
    if (detailsSection && teacherCard) {
        detailsSection.classList.remove('show');
        teacherCard.classList.remove('active');
    }
};

window.closeAllTeacherDetails = function() {
    const allDetails = document.querySelectorAll('.teacher-details');
    const allTeacherCards = document.querySelectorAll('.teacher-card');
    
    allDetails.forEach(detail => {
        detail.classList.remove('show');
    });
    
    allTeacherCards.forEach(card => {
        card.classList.remove('active');
    });
};