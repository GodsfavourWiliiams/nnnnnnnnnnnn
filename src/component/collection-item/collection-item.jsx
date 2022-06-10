import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaExpand, FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { toast } from 'react-toastify';

const CollectionItem = ({ addItem, item }) => {
  const { name, price, imageUrl } = item;
  const navigate = useNavigate();
  
  console.log(item)

  return (
    <>
       <div className="product__item group relative border rounded-lg cursor-pointer">
            <div className="min-h-44 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:aspect-none flex-shrink-0 overflow-hidden mx-auto sm:w-44 w-28 sm:h-44 mt-4">
                <img
                  src={imageUrl}
                  alt="names"
                  className="w-full h-28 sm:h-44 object-cover lg:w-full lg:h-full"
                />
            </div>
            <p className="absolute top-0 sm:m-2 m-1 rounded-lg bg-red-500 py-1 px-3 text-sm sm:font-semibold font-medium text-white"></p>
            <div className="mt-4 flex flex-col p-3">
              <div>
                <h3 className="text-sm text-gray-700 h-full truncate">
                    {name}
                </h3>
                <h4 className="mt-1 text-sm text-gray-500">Rent Now</h4>
                <div className="product__hover">
                    <FaShoppingCart className='cart p-2 rounded-lg bg-white shadow-sm hover:bg-green-500 hover:text-white'  onClick={() => {
                            addItem(item)
                            toast.success( name + " Successfully added")
                          }}/>
                    <FaExpand className='cart p-2 rounded-lg bg-white shadow-sm hover:bg-green-500 hover:text-white'
                    onClick={() => {
                      // navigate(`/shop/${item.routeName}`)
                    }
                    }
                    />
                </div>            
              </div>
              <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-900">₦ {price}</p>
                    <p className="sm:m-2 m-1 inline-block rounded-full bg-yellow-400 py-1 px-3 text-sm font-semibold text-white">
                    -50%
                  </p>
                </div>
            </div>
      </div>
  </>
        
)
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);