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
          <p>fulltimesupper@hotmail.com</p><br/>
          <p>RovertWilliam@outlook.com</p><br/>
          <p>NicolaePop55@hotmail.com</p><br/>
          <p>fulltimesuper@outlook.com</p><br/>
          <p>fulltime09876%$#@!</p><br/>
          <p>nic0509@myyahoo.com</p><br/>
          <p>popanic5623@gmail.com</p><br/>
          <p>https://www.linkedin.com/in/luis-ming-ba959124b</p><br/>
          <p>https://twitter.com/LuisMing3</p><br/>
          <p>https://github.com/fulltime117</p><br/>
          <p>http://luis.liveblog365.com</p> <br/>
          <p>tel:&nbsp;&nbsp;  +14697300159</p> <br/>
          <p>Pino Douglas 102, Los Pinos de Michoacán, 58057 Morelia, Mich., Mexico</p> <br/>
          <p>https://www.facebook.com/luisming0509</p>
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
