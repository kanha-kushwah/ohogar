import React from "react";
import PostSingle from "@/app/components/PostSingle/PostSingle";

const page = ({params}) => {

  const post = params.buyid;

  return (
    <div>
<PostSingle post={post}/>
    </div>
  )
}

export default page
