import React from 'react';
import PostPage from '../../app/(user)/post/[slug]/page';

export default {
  title: "Homepage",
  component: PostPage,
}

export const PostingPage = (arg) => <PostPage params={arg} />