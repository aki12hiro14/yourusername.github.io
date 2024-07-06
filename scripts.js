document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    
    const posts = [
        {
            title: '不動産市場の最新動向',
            date: '2024-07-01',
            url: 'posts/post1.html'
        },
        {
            title: 'アパート経営の成功例',
            date: '2024-06-25',
            url: 'posts/post2.html'
        }
    ];

    posts.forEach(post => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = post.url;
        link.textContent = `${post.title} - ${post.date}`;
        listItem.appendChild(link);
        blogList.appendChild(listItem);
    });
});
