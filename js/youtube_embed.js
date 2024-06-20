document.getElementById('youtubeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('youtubeUrl').value;
    const videoId = extractVideoId(url);
    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        const iframe = `<iframe width="1280" height="800" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = iframe;
        videoContainer.classList.add('bg-black'); // Agregar la clase bg-white al div videoContainer
    } else {
        alert('Por favor, introduce una URL válida de YouTube.');
    }
});

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}