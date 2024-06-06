document.getElementById('uploader').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const modelViewer = document.getElementById('ar-viewer');
    modelViewer.src = url;

    generateShareLink(url);
}

function generateShareLink(modelUrl) {
    const currentUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${currentUrl}?modelUrl=${encodeURIComponent(modelUrl)}`;
    const shareLinkDiv = document.getElementById('share-link');
    shareLinkDiv.innerHTML = `<p>Share this AR experience: <a href="${shareUrl}">${shareUrl}</a></p>`;
}

// Load model from URL if present
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modelUrl = urlParams.get('modelUrl');
    if (modelUrl) {
        const modelViewer = document.getElementById('ar-viewer');
        modelViewer.src = modelUrl;
    }
});
