/**
 * Simple http get request
 * @param url 
 */
export const get = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json
}