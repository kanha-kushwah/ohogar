import React from "react";
import PostSingle from "@/app/components/PostSingle/PostSingle";

const page = ({params}) => {

  const post = params.buyid;
  const formattedTitle = post.toLowerCase().replace(/\s+/g, '-');
  return (
    <div>
<PostSingle post={formattedTitle}/>
    </div>
  )
}

export default page
