import { useEffect, useState } from "react";
import { makeHeaders } from "./fetch";
import PostCard from "./PostCard";
import SearchForm from "./SearchForm";
const postMatches = (post, text) => {
  return !text || post.toLowerCase().includes(text.toLowerCase());
};

const Post = (props) => {
  useEffect(() => {
    fetch(
      "https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT/posts",
      makeHeaders("get")
    )
      .then((response) => response.json())
      .then((response) => props.setPosts(response.data.posts))
      .catch(console.error);
  }, []);
  console.log(props.posts);
  return (
    <div className="posts">
      {" "}
      <SearchForm setSearchTerm={props.setSearchTerm}></SearchForm>
      <div className="post-container">
      {props.posts.map((post) => {
        return (
          postMatches(post.title, props.searchTerm) && (
            <PostCard {...post} posts={props.posts} setPosts={props.setPosts} />
          )
        );
      })}
      </div>
    </div>
  );
};
export default Post;
