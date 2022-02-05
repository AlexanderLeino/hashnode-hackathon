import React from "react";
    import PropTypes from "prop-types";
 
    const Tag = ({tag, style}) => {
      return(
        <li style={{listStyleType:"none"}}>
          <span className="tag" style={style}>
            {tag}
          </span>
        </li>
       
      )
    }
    Tag.propTypes = {
        tag: PropTypes.string,
        style: PropTypes.object,
    }
    export default Tag;