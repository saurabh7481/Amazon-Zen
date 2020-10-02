import React from 'react'
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../../context/StateProvider';
import {auth} from '../../firebase';

function Header() {
    const [{basket, user}] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className={classes.header}>
            <Link to="/">
                <img  className={classes.header__logo}
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"/>
            </Link>
            <div className={classes.header__search}>
                <input type="text" className={classes.header__searchInput} />
                <SearchIcon className={classes.header__searchIcon}/>
            </div>

            <div className={classes.header__nav}>
                <Link to={!user && "/login"} className={classes.header__link}>
                    <div onClick={login} className={classes.header__options}>
                        <span className={classes.header__optionLineOne}>Hello {user ? user.email : ''}</span>
                        <span className={classes.header__optionLineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className={classes.header__link}>
                    <div className={classes.header__options}>
                        <span className={classes.header__optionLineOne}>Returns</span>
                        <span className={classes.header__optionLineTwo}>& Orders</span>
                    </div>
                </Link>

                <Link to="/" className={classes.header__link}>
                    <div className={classes.header__options}>
                        <span className={classes.header__optionLineOne}>Your</span>
                        <span className={classes.header__optionLineTwo}>Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className={classes.header__link}>
                    <div className={classes.header__optionBasket}>
                        <ShoppingBasket />
                        <span className={[classes.header__optionLineTwo, classes.header__basketCount].join(' ')}>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header;
