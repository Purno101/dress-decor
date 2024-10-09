document.getElementById('searchInput').addEventListener('input', searchImages);

// Get the NodeList of image wrappers
const imageWrappers = document.querySelectorAll('.gallery .image-wrapper');

let noMatch = document.getElementById('noMatch');
noMatch.style.display = "none";

imageWrappers.forEach(wrapper => {
    wrapper.style.display = "none";
});

function searchImages() {
    const rawQuery = document.getElementById('searchInput').value;
    const query = rawQuery.toLowerCase().replace(/\s+/g, '');

    if (query === '') {
        imageWrappers.forEach(wrapper => {
            wrapper.style.display = 'none';
        });
        noMatch.style.display = 'none';
        return;
    }

    let matchesFound = false;

    imageWrappers.forEach((wrapper) => {
        const img = wrapper.querySelector('img');
        const altText = img.alt.toLowerCase().replace(/\s+/g, '');
        
        if (query.split('').every(char => altText.includes(char))) {
            wrapper.style.display = 'block';
            matchesFound = true;
        } else {
            wrapper.style.display = 'none';
        }
    });

    if (!matchesFound) {
        noMatch.style.display = 'block';
        noMatch.style.marginTop = '50px';
        noMatch.textContent = `Currently there is no related search to "${rawQuery}"`;
    } else {
        noMatch.style.display = 'none'; 
    }
}