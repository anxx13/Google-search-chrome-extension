document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', fetchData);
});

async function fetchData() {
    const keyword = document.getElementById("keyword").value;
    const url = 'https://google-search72.p.rapidapi.com/search?q=' + keyword + '&lr=en-US&num=10';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'cb8490c226msh1554287d79af7bdp14a8c8jsn9ffa101230f4',
            'x-rapidapi-host': 'google-search72.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log('data', data);

        if (data.items && data.items.length > 0) {
            document.getElementById("search").innerHTML = data.items
                .map(item => `<li><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></li>`)
                .join('');
        } else {
            document.getElementById("search").innerHTML = '<li>No results found.</li>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById("search").innerHTML = '<li>Error fetching search results. Please try again later.</li>';
    }
}
