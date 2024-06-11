import React, {useState, useEffect} from 'react';
import CustomPaginate from '../customPaginate';
import axios from '../../core/axios'
import TableCustom from '../Table'
import CustomSearch from '../search';
import "./App.css"


function App() {
  const [data, setData] = useState(null);
  const [totalItem, setTotalItem] = useState(0);
  const [filterID, setFilterID] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const searchParams = new URLSearchParams(window.location.search);

useEffect(()=>{

  const page = searchParams.get('page');
  const userID = searchParams.get('userID');
  if(userID){
    setFilterID(userID)
  }

  if(page){
    setActivePage(page);
  }


},[])



  useEffect(()=>{

    const page = ( searchParams.get('page') && searchParams.get('page') > 0  ) ?  searchParams.get('page') - 1 : 0;
    console.log(page)
    if(searchParams.get('userID')){
      axios.get(`http://localhost:3001/api/log/?page=${page}&userID=${searchParams.get('userID')}`)
      .then(response => {
        setData(response.data.data)
        setTotalItem(response.data.Totalitem)
  
      })
    }else{
      axios.get(`http://localhost:3001/api/log/?page=${page }`)
      .then(response => {
        console.log(response)
        setData(response.data.data)
        setTotalItem(response.data.Totalitem)
      })
    }

  },[searchParams.get('page')]);


  return (
    <div className="App">
      <div className="container">

        {
          !data ? 'Loading' : (<>
          <CustomSearch/>
          <TableCustom data={data}/>
          <CustomPaginate totalItem={totalItem} activePage={searchParams.get('page') <= 0  ?  1  :  searchParams.get('page')}/>
          
          </>)
        }
      </div>
    </div>
  );
}

export default App;
