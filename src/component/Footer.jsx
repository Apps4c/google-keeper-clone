import React from 'react';
let year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p> © copy write {year}</p>
        </footer>
    );
}

export default Footer;