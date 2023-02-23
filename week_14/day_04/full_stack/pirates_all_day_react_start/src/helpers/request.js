class Request {
    // Fetch data from the API
    async get (url) {
        const result = await fetch(url);
        return result.json();
    }
}

export default Request;
