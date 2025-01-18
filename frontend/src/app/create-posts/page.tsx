'use client';
import React, { useState } from 'react';

interface Post {
  postImg: string;
  postCaption: string;
  altText: string;
  id: string;
}

export default function ComponentPage() {
  const [postsData, setPostsData] = React.useState<Post[]>([]);
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
  const [isScheduling, setIsScheduling] = useState(!false);

  async function createPosts() {
    console.log('Create Posts');
    setPostsData([{ postImg: '', postCaption: '', altText: '', id: '' }]);
    // const data =await fetch(`/api/posts/instagram`)
    // const response = await data.json();
  }

  const handleSchedulePost = () => {
    if (scheduledDate) {
      console.log('Post scheduled for:', scheduledDate);
      // Logic to handle scheduling the post
      setScheduledDate(null); // Reset after scheduling
      setIsScheduling(false); // Close the date picker
    } else {
      console.log('Post will be published immediately');
      // Logic to handle immediate posting
    }
  };

  return (
    <div>
      <h1>Create Posts</h1>

      <div>
        <button className='btn btn-primary' onClick={createPosts}>
          Generate Post
        </button>
        {postsData.length > 0 ? (
          postsData.map((postData, index) => {
            return (
              <div key={postData.id}>
                <img src={postData.postImg} alt={postData.altText} />
                <div>{postData.postCaption}</div>
                <div>{postData.altText}</div>
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}

        {isScheduling && (
          <div>
            <button className='btn btn-primary' onClick={handleSchedulePost}>
              Confirm Schedule
            </button>
          </div>
        )}
        <button className='btn btn-primary' onClick={handleSchedulePost}>
          Post now
        </button>
      </div>
    </div>
  );
}
