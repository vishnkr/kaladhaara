import { useEffect, useState } from "react";

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]); // Replace with actual blog data fetching logic

  useEffect(() => {
    // Simulating a fetch of blog posts; replace with your API call or data fetching logic
    setTimeout(() => {
      // Empty the blog posts list for testing
      setBlogPosts([]);
    }, 1000);
  }, []);

  return (
    <div className="blog-section py-8 px-4 flex-grow flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        {blogPosts.length === 0 ? (
          <p className="text-lg text-gray-500">
            Stay tuned for upcoming blog posts!
          </p>
        ) : (
          <div className="blog-posts">
            {/* Map through and display blog posts here */}
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-post">
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
