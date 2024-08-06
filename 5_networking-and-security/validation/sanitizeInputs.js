const sanitizeHtml = rqeuire('sanitize-html');
const sanitized = sanitizeHtml(
    '<script>alert("xss");</script>',
    {
        allowedTags: [],
        allowedAttributes: {}
    }
);

console.log("Sanitzied input: ", sanitized);