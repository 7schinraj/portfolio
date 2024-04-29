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