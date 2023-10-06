"use client"

import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();

      setPosts(data);
    })();
  }, []);

  return (
    <section className="feed">
      <form className="relative flex-center w-full">
        <input
          type="text"
          placeholder="search for prompts"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search_input peer"
          required
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed
