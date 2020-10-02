import React from 'react'
import classes from './Home.module.css';
import Product from '../Products/Product';

function Home() {
    return (
        <div className={classes.home}>
            <img src="https://netrockdeals.sirv.com/WP_netrockdeals.com/2020/04/H/o/1/How-to-Get-Amazon-Prime-Membership-For-Free-banner-min-1.jpg"
                alt="logo" 
                className={classes.home__banner}/>

            <div className={classes.home__row}>
                <Product 
                id="343523523"
                title="To Kill a Mockingbird"
                image="https://cdn.lifehack.org/wp-content/uploads/2015/03/50-anniversary-cover1.jpg"
                price={99.99}
                rating={5} />  

                <Product 
                id="345346345"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                image="https://images-na.ssl-images-amazon.com/images/I/41Ty8q6KoaL._AC_.jpg"
                price={399.99}
                rating={5} />  
            </div>

            <div className={classes.home__row}>
                <Product 
                id="3"
                title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
                image="https://images-na.ssl-images-amazon.com/images/I/51MsvuD7iOL._SL1020_.jpg"
                price={99.99}
                rating={5} />  

                <Product 
                id="4"
                title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650,8GB DDR4, 256GB NVMe SSD"
                image="https://images-na.ssl-images-amazon.com/images/I/81mMbsJSkSL._SX466_.jpg"
                price={99.99}
                rating={5} />  

                <Product 
                id="5"
                title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                image="https://images-na.ssl-images-amazon.com/images/I/61OZrEPa3PL._AC_SX466_.jpg"
                price={299.99}
                rating={5} />  
            </div>

            <div className={classes.home__row}>
                <Product 
                id="6"
                title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
                price={278.99}
                rating={5} />  

                
            </div>

             
        </div>
       
    )
}

export default Home
