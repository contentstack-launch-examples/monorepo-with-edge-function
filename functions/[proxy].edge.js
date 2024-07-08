export default async function handler(request) {
    const request = new URL(request.url);

    // Redirect requests to www subdomain if the hostname is example.domain.com
    if (request.hostname == "example.domain.com") {
        request.hostname = "www.example-domain.com";
        return Response.redirect(request, 301)
    }

    return fetch(request);
}