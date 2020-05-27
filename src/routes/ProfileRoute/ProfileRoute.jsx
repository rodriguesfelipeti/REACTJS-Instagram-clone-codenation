import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [id, setUserId] = useState('')
  const [username, setUserName] = useState('')
  const [email, SetEmail] = useState('')
  const [posts, setUserPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const { pathname } = window.location
    const user = pathname.split('/')[2]
    
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${user}`)
    .then(res => res.json())
    .then(data => {
      setUserId(data[0].id)
      setName(data[0].name)
      setUserName(data[0].username)
      setAvatar(data[0].avatar)  
      SetEmail(data[0].email)
    })
  })

  useEffect(() => {
    if (id) {
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
          setUserPosts(posts);
          setIsLoading(false)
        });
    }
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile avatar={avatar} name={name} username={username}  email={email}/>
      {isLoading && <Loading />}
      <UserPosts posts={posts}/> 
    </div>
  );
};

export default ProfileRoute;
