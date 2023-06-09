import React, { Fragment } from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
    <Fragment>
        <ul>
        <ListItems list={listx} /> 
        </ul>
    </Fragment>
       
    
    
  )
}

export default List;