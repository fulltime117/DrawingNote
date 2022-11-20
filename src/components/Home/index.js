import React, { useState } from 'react'
import { RoadMap } from '../RoadMap';
import { SearchBar } from '../Shared'

import {
  HomeContainer,
  SerchNumWrapper
} from './styles'

export const Home = (props) => {
  const [searchNum, setSearchNum] = useState(null)


  const searchKey = () => {
    var input, filter, tr, td, i, txtValue;
    input = document.getElementById("keyInput");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const handleSearchNum = (val) => {
    console.log('val ', val)
    setSearchNum(val)
  }



  return (
    <HomeContainer id='home'>
      <section className='anotations'>
      <div>
          <h2 id="list of autocad commands">Short Address</h2>
          <p>nic0509@myyahoo.com</p>
          <p>popanic5623@gmail.com</p>
          <p>https://www.linkedin.com/in/luis-ming-ba959124b</p>
          <p>https://twitter.com/LuisMing3</p>
          <p>https://github.com/fulltime117</p>
          <p>https://www.facebook.com/luisming0509</p>
          <p>tel:&nbsp;&nbsp;  +14697300159</p>   
        </div>
      </section>
    
      <SerchNumWrapper id='console-search'>
        <SearchBar
          lazyLoad
          onSearch={handleSearchNum}
        />
      </SerchNumWrapper>
      <RoadMap searchNum={searchNum} />
    </HomeContainer>
  )
}
