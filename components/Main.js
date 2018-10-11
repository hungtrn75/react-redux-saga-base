import React from 'react';
import Header from './layouts/Header'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'

export default ({ children }) => (
  	<div className="container">
    	<Header />
    	<Banner />
    	{ children }
    	<Footer />
  	</div>
)


