import React from 'react';
import './group.css';
import Tag from '../../components/Tag';
import img from '../../assets/illustration2.png';
import { Paper, Button } from '@mui/material';
 
const Groups = () => {
  // dynamic data
  const groupName = "100 Devs";
  const people = "10 people"
  const tag1 = " Software Development";
  const tag2 = "Web Developers";
  const tag3 = "Network";
  const tag4 = "Collaborate";
 
 
  return(
    <div className="group">
      <div className="group-Wrapper">
        <div className="group-Top" >
            <div className="img-Wrapper">
              <img src={img} />
            </div>
            <h1 className="group-Name">{groupName}</h1>
            <span className="group-Total">{people}</span>
        </div>
        <Paper className="group-Main">
          <div className="tags-Section">
              <h2>Tags</h2>
              <ul className="tags">
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
        </Paper>
        <Button className="join-Group" size="large" variant="contained" fullWidth={true}>Join Group</Button>
      </div>
    </div>
  )
}
export default Groups;