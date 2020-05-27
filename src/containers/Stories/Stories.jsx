import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const handleStory = (story, profileData) => {
    
    setSelectedProfile(profileData)
    setSelectedHistory(story)
    toggleShowStory(!showStory)

  }


  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map(( story, index ) => {

            const profileData = getUserHandler(story.userId)
            if(profileData) {

              return(
                <button key={story.id} 
                        onClick={() => handleStory(story, profileData)  }
                        className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}>
                    <div className="user__thumb__wrapper">
                      <img src={profileData.avatar} alt={profileData.name} />
                    </div>
                </button>
              )
            }
            return true
          })}
        </div>
      </section>

      {showStory && (
          <Story story={selectedStory}
                 user={selectedProfile}
                 handleClose={() => toggleShowStory(!showStory)} 
          />
        )}
    </React.Fragment>
  );
};

export default Stories;
