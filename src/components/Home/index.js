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
      <section className='pr-lists'>
        <div>
          <h2 id="list of autocad commands">Short Address</h2>
          <h4>InfoCenter</h4>
          <p>viviend@codev.com</p>
          <p>password</p>
          <br/>
          <p>npx typeorm migration:run</p>
          <br/>
          <p>---AnyDesk---</p>
          <p>598708875</p>
          <p>password0623</p>
          <p>---App URL---</p>
          <p>authentication : 3003</p>
          <p>students-app : 3001</p>
          <p>users-app : 3000</p>
          <p>applications-app : 3004</p>
          <p>media-app : 3005</p>
          <p>gateway : 3002</p><br/>
          <p>http://localhost:3003/graphql</p>


          <h4>my</h4>
          <p>fulltimesupper@hotmail.com</p>
          <p>RovertWilliam@outlook.com</p>
          <p>NicolaePop55@hotmail.com</p>
          <p>fulltimesuper@outlook.com</p>
          <p>fulltime09876%$#@!</p>
          <p>nic0509@myyahoo.com</p>
          <p>popanic5623@gmail.com</p>
          <p>tel:&nbsp;&nbsp;  +14697300159</p>
          <p>http://luis.liveblog365.com</p>
          <p>https://github.com/fulltime117</p>
          <p>https://www.linkedin.com/in/luis-ming-ba959124b</p>
          <p>https://twitter.com/LuisMing3</p>
          <p>Pino Douglas 102, Los Pinos de Michoacán, 58057 Morelia, Mich., Mexico</p>
          <p>https://www.facebook.com/luisming0509</p>


          <p>
            Thank you for reaching out. Currently, I am living in Mexico. <br />
            But I don't know Spanish well because I moved here a few months ago. <br />Can we communicate in English? <br />If this is no problem for this position, I attached my resume for your review. <br />
            If there is anything else you need, please, let me know.<br />

            <br />
            <br />
            Kind regards,<br />
            Luis Ming
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
