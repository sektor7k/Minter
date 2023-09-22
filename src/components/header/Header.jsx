import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menus from '../../pages/menu';
import './styles.scss';
import logo from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';
import DarkMode from './DarkMode';
import { useSDK } from '@metamask/sdk-react';
import { Link as ScrollLink } from "react-scroll";



const Header = () => {
    const [account, setAccount] = useState();
    const { sdk, connected, connecting, provider, chainId } = useSDK();
    const [address, setAddress] = useState();
    const [isConnected, setIsConnected] = useState(false);

    const connect = async () => {
        try {
            const accounts = await sdk?.connect();
            if (accounts?.[0]) {
                setAccount(accounts[0]);
                setAddress(accounts[0]);
                setIsConnected(true);
            }
        } catch (err) {
            console.warn(`Bağlantı başarısız oldu..`, err);
        }
    };

    const disconnect = async () => {
        try {
            sdk?.disconnect();
            setIsConnected(false);
        } catch (err) {
            console.warn(`Bağlantıyı kesme başarısız oldu..`, err);
        }
    };

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setScroll(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);
    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index);
    };

    const handleMenuClick = (link) => {
        if (link.startsWith('#')) {
            const element = document.getElementById(link.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <header className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logodark} alt="Binasea" />
                                        <img id="logo_header" className='logo-light' src={logo} alt="Binasea" />
                                    </Link>
                                </div>
                            </div>

                            <div className="header-center">
                                <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        <li><Link to="/">Home</Link></li>
                                        <li><ScrollLink to="about" smooth={true} >About</ScrollLink></li>
                                        <li><ScrollLink to="roadmap" smooth={true}>Road Map</ScrollLink></li>
                                        {menus.map((data, idx) => (
                                            <li key={idx} onClick={() => handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`}>
                                                <Link to={data.links} onClick={() => handleMenuClick(data.links)}>{data.name}</Link>
                                                {data.namesub && (
                                                    <ul className="sub-menu">
                                                        {data.namesub.map((submenu) => (
                                                            <li key={submenu.id} className="menu-item">
                                                                <Link to={submenu.links} onClick={() => handleMenuClick(submenu.links)}>{submenu.sub}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                        <li><Link to="/">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-right">
                                <DarkMode />
                                <Link to="/contact" className="tf-button discord"><i className="icon-fl-vt"></i><span>DISCORD</span></Link>
                                {isConnected ? (
                                    <button onClick={disconnect} className="tf-button connect"><i className="icon-fl-wallet"></i><span>{address.substring(0, 4)+".."+address.substring(address.length - 3, address.length)}</span></button>
                                ) : (
                                    <Link onClick={connect} to="#" className="tf-button connect" data-toggle="modal" data-target="#popup_bid"><i className="icon-fl-wallet"></i><span>CONNECT</span></Link>
                                )}
                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;