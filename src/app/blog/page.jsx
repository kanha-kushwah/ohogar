import React from 'react'
import Link from 'next/link';

const page = () => {
    const posts = [
        { id: '1', title: 'First Blog Post', date: '2023-06-23' },
        { id: '2', title: 'Second Blog Post', date: '2023-06-24' },
        { id: '3', title: 'third Blog Post', date: '2023-06-24' },
        
      ];
  return (
<ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <p>{post.title}</p>
            </Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
  )
}

export default page