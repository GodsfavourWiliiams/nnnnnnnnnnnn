import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ReactComponent as ActionsUser} from '../Assets/actions-user.svg';
import { ReactComponent as SearchIcon} from '../Assets/search.svg';
import { ReactComponent as Shop} from '../Assets/Shop.svg';
import { ReactComponent as Hamburger } from '../Assets/darhboard_alt.svg';
import Directory from '../directory/directoy';
import Banner from './banner';
import { connect } from 'react-redux';
import { logout } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';



const Header = ({ currentUser, hidden, collections }) => {

  const  [IsNavFixed, setIsNavFixed] = useState(false);
  const  [IsDropDownFixed, setIsDropDownFixed] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onScrollTOp = () => {
  window.scrollY >= 35 ? setIsNavFixed(true) : setIsNavFixed(false)
  }
  
  window.addEventListener('scroll', onScrollTOp)

  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    if(inputText.trim()) {
      navigate(`searchresult`)
    } else{
      setError(true)
        
    }
    setTimeout(() => {
      setError(false)
    }, 3000);
    
  };

  // console.log(collections[0].items.basezills)

return(
    <div className=''>
      <Banner/>
    <div className={ IsNavFixed ? "fixed w-full top-0 z-40 " : "relative transition-all ease-in-out duration-700" }>
      <div className=" bg-white lg:px-8 px-4 transition-all ease-in-out duration-700">
        <nav className='border-gray-200 py-10'>
          <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
              <h2 className=" text-2xl sm:text-3xl font-semibold">Rentals</h2> 
          </Link>

          <div className="hidden md:max-w-xs w-full lg:max-w-lg md:block flex relative md:order-1 justify-center items-center">
                <input 
                  type="text" 
                  className={`${error ? "border-red-500" : ""} px-8 rounded-lg w-full lg:max-w-lg h-11 border focus:outline-none`}
                  placeholder="Search Products, categories ..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value.toLowerCase())}
                  />
                  <div className="absolute top-3.5 right-3">
                    <SearchIcon className=" z-50 cursor-pointer " onClick={inputHandler}/>
                  </div>
          </div>
          <div className="md:w-auto md:order-1">
            <Hamburger className='cursor-pointer md:hidden' onClick={() => setIsDropDownFixed(!IsDropDownFixed)}/>
            <ul className={`md:relative fixed z-40 mt-8 md:right-0 flex md:flex-row flex-col p-4 md:p-0 items-start justify-center md:bg-transparent bg-white shadow md:shadow-none rounded md:space-y-0 space-y-4 md:mt-0 md:text-sm md:font-medium transition-all duration-700 ${IsDropDownFixed ? 'right-4 ' : '-right-80'}`}>
              {currentUser ?
               <div className='flex gap-3 flex-row space-x-3 items-center md:pr-0 pr-10 cursor-pointer' 
               onClick={
                 () => {
                   logout()
                   window.location.reload(true);
                 }}>
                 <ActionsUser/> 
                 Log Out
               </div>
               :
              <Link to="/signin" className='flex flex-row space-x-3 items-center md:pr-0 pr-10'>
                <ActionsUser/> 
                <span className=''>Log In</span>
              </Link>
              }
                <Link to="/shop" className="md:pl-6 ml-0 flex flex-row space-x-3 items-center md:pr-6 pr-10 ">
                  <Shop/>
                  <span className=''>Shop</span>
                </Link>
              <div className="cursor-pointer flex flex-row space-x-4 items-center md:pr-0 pr-10">
                <CartIcon/>
              </div>
            </ul>
          </div>

          <div className="mt-8 md:max-w-xs w-full lg:max-w-lg md:hidden flex relative md:order-1 justify-center items-center">
              <input 
              className={`${error ? "border-red-500" : ""} px-8 rounded-lg w-full lg:max-w-lg h-11 z-0 border bg-white focus:outline-none`} 
              placeholder="Search Products, categories..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value.toLowerCase())}
              />
                  <div className="absolute top-3.5 right-3">
                    <SearchIcon className="z-20 " onClick={inputHandler}/>
                  </div>
            </div>
          </div>
        </nav>
      </div>
    <Directory/>
    {hidden ? 
    null :
    <CartDropdown/>
    }
  </div>
</div>
)
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(Header);
