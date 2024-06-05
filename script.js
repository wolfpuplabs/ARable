function uploadModel() {
    const fileInput = document.getElementById('fileInput');
    const arViewer = document.getElementById('arViewer');

    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const modelURL = event.target.result;

        // Call function to display model in AR viewer
        displayARModel(modelURL);
    };
    reader.readAsDataURL(file);
}

function displayARModel(modelURL) {
    // You can use libraries like AR.js, Three.js, or A-Frame to display the model in AR
    // Here's a basic example using AR.js
    const arViewer = document.getElementById('arViewer');
    arViewer.innerHTML = `
        <a-scene embedded arjs>
            <a-marker preset="hiro">
                <a-entity
                    gltf-model="${modelURL}"
                    scale="0.5 0.5 0.5"
                ></a-entity>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    `;
}
