import React from 'react';
import Tag from '../components/Tag';
 
const Groups = () => {
  // dynamic data
  const groupName = "100 Devs";
  const tag1 = " Software Development";
  const tag2 = "Web Developers";
  const tag3 = "Network";
  const tag4 = "Collaborate";
 
 
  return(
    <div className="groups">
      <div className='groupsWrapper'>
        <div className="groupsTop" >
            <h1>{groupName}</h1>
        </div>
        <div className="tagsWrapper">
            <h2>Tags</h2>
            <ul className='tags'>
            <Tag tag={tag1} style={{backgroundColor: "#5599f5"}} />
            <Tag tag={tag2} style={{backgroundColor: "#81c784"}} />
            <Tag tag={tag3} style={{backgroundColor: "#ec407a"}} />
            <Tag tag={tag4} style={{backgroundColor: "#d08cdf"}} />
            </ul>
        </div>
        <div>
            <h2>Members</h2>
        </div>
        <div>
            <h2>Group Details</h2>
        </div>
      </div>
    </div>
  )
}
export default Groups;