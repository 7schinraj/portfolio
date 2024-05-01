function homeMenu() {
    var blockMenu = document.getElementById('nav-contents');
    blockMenu.style.display = 'block';
}
function closeMenu() {
    var blockMenu = document.getElementById('nav-contents');
    blockMenu.style.display = 'none';
}

// #Resume Download Functionality
function downloadResume() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';

    // Delay the download for 3 seconds
    setTimeout(function() {
        console.log('Downloading resume');
        const resumeUrl = './resume/Resume.pdf';
        const downloadLink = document.createElement("a");
        downloadLink.href = resumeUrl;
        downloadLink.download = 'your_resume.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        loadingOverlay.style.display = 'none';
    }, 3000);
}
// smoth scroll functionality 
// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = event.target.getAttribute("href").substring(1);
//     const targetElement = document.getElementById(targetId);
//     const offsetTop = targetElement.offsetTop;
//     const scrollOptions = {
//         top: offsetTop,
//         behavior: 'smooth'
//     };
//     window.scrollTo(scrollOptions);
// }
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop;
    
    // Get current scroll position
    const start = window.pageYOffset;
    const distance = offsetTop - start;
    const duration = 1000; // 1 second
    
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}