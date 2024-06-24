import React from 'react'

const Page = ({ params }) => {
  const posts = [
    { id: '1', title: 'First Blog Post', date: '2023-06-23', content: 'This is the content of the first post.' },
    { id: '2', title: 'Second Blog Post', date: '2023-06-24', content: 'This is the content of the second post.' },
  ];

  const post = posts.find(p => p.id === params.blogid);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default Page;
