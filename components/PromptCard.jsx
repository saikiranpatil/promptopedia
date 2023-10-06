"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const {data: session} = useSession();
  const pathname = usePathname();
  // const router = useRouter();

  const [copyText, setCopyText] = useState("");

  const handleCopy = () => {
    setCopyText(post.prompt);
    navigator.clipboard.writeText(post.prompt);
  
    setTimeout(() => setCopyText(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex items-center gap-5 justify-between">
        <div className="flex flex-1 justify-start itemd-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={44}
            height={44}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div
          className="copy_btn"
          onClick={handleCopy}

        >
          <Image
            src={copyText === post.prompt
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"}
              alt="copy_propmt"
            width={16}
            height={16}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>

      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathname === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p 
          className="text-sm font-inter green_gradient cursor-pointer"
          onClick={handleEdit}
          >
            Edit
          </p>
          <p 
          className="text-sm font-inter orange_gradient cursor-pointer"
          onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard
