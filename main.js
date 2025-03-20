document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');
            const content = document.getElementById(contentId);

            // Toggle the display of the content
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Close all other open sections
                document.querySelectorAll('.collapsible-content').forEach(item => {
                    item.style.display = 'none';
                });
                // Open the clicked section
                content.style.display = 'block';
            }
        });
    });
});