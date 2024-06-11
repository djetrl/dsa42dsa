import { Pagination } from "react-bootstrap"


const CustomPaginate = ({activePage, totalItem}) =>{
  const searchParams = new URLSearchParams(window.location.search);
  const onRedirect = (page) =>{

    if(searchParams.get('userID')){
      window.location.replace(`${window.location.origin}/?page=${page}&userID=${searchParams.get('userID')}` )
    }else{
      window.location.replace(`${window.location.origin}/?page=${page}` )
    }
  }
  const onRedirectOnePage = (totalItem, activePage, status)=>{
      if(status == '+' && activePage < totalItem){
        onRedirect(+activePage + 1)
      }
      if(status == '-' &&  activePage > totalItem){
        onRedirect(+activePage - 1)
      }
    
  }
  let items = [];
  for(let number = 1; number <= Math.ceil(totalItem / 10); number++){

    items.push(
      <Pagination.Item key={number} active={number === +activePage} onClick={()=>onRedirect(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  return(
    <Pagination>
      <Pagination.First onClick={()=>onRedirect(1)} />
      <Pagination.Prev  onClick={()=>onRedirectOnePage(totalItem, activePage, '-' )} />
        {items}
      <Pagination.Next  onClick={()=>onRedirectOnePage(totalItem, activePage, '+' )} />
      <Pagination.Last onClick={()=>onRedirect(Math.ceil(totalItem / 10))} />
    </Pagination>
  )
}


export default CustomPaginate;