import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{color: 'red', textDecoration: 'none', fontSize: '28px'}}>FlyFlix</Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Trending</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/search" style={{textDecoration: "none", fontSize: '20px'}}><span>Search</span></Link>
            </div>
        </div>
    )
}

export default Header