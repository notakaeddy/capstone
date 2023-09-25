import React, { useContext } from 'react';

import {Link} from 'react-router-dom';

import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import Cartitem from './Cartitem';

import {SidebarContext} from '../contexts/SidebarContext' 

import { CartContext } from '../contexts/CartContext';
const Sidebar = () => {
	const {isOpen, handleClose} = useContext(SidebarContext);
	console.log(useContext(CartContext));
	return (
		//below is what cuts off page in half remove clasName below or lpay with values to fix
	<div className={`${isOpen ? 'right-0' : '-right-full'}
	w-full bg-white fixed top-0 h-full
	shadow-2x-1 md:w-[35vw] x1:max-w-[30vw] transition-all
	duration-300 z-20 px-4 lg:px-[35px]'`}
	> 
	<div className='flex items-center justify-between py-6
	border-b'> 
		<div className='uppercase text-sm
		font-semibold'>Shopping Bag (0)</div>

				<div onClick ={handleClose}
				className=' curson-pointer w-8 h-8 flex
				justify-center items-center'
				> 
					<IoMdArrowForward className='text-2x1' />
				</div>
			</div>
	</div>
	);
};

export default Sidebar;