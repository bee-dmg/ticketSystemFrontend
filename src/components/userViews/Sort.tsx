import React from 'react';

import { Link } from 'react-router-dom';
function Sort(props:{setSortPref:Function}) { 
    const setSortPref =props.setSortPref;
  return (
    <div>
    Sort By:
    <Link to="#" onClick={() => setSortPref("dateUp")}>
      Oldest First
    </Link>
    /
    <Link to="#" onClick={() => setSortPref("dateDown")}>
      Newest First
    </Link>
  </div>
  )
}

export default Sort;
