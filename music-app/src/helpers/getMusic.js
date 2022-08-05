export const getMusic = async (artist, album) => {
    
    const url = `https://itunes.apple.com/search?term=${artist}&limit=20`;
    const resp = await fetch(url);

    

}