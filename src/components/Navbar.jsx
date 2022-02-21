import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black shadow shadow-gray shadow-intensity-lg">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/">Cryptoverse</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cryptocurrencies">Cryptocurrencies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

{/* <div>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div> */}

{/* <div className='nav-container'>
<div className="logo-container">
    <Avatar src={icon} size="large" />
    <Typography.Title level={2} className="logo">
        <Link to="/">Cryptoverse</Link>
    </Typography.Title>
</div>
<Menu theme='dark'>
    <Menu.Item icon={<HomeOutlined />}>
        <Link className="nav-link" to="/">Home</Link>
    </Menu.Item>
    <Menu.Item icon={<FundOutlined />}>
        <Link className="nav-link"  to="/cryptocurrencies">Cryptocurrencies</Link>
    </Menu.Item>
    <Menu.Item icon={<MoneyCollectOutlined />}>
        <Link className="nav-link"  to="/exchanges">Exchanges</Link>
    </Menu.Item>
    <Menu.Item icon={<BulbOutlined />}>
        <Link to="/news">News</Link>
    </Menu.Item>
</Menu>
</div> */}