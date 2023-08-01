



export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kjewYY9mlqEjc0T02Lp6Vf6eEQ1KFmT7&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const Gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return Gifs;
}