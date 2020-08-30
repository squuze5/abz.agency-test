import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">

                <div className="banner__content">
                    <h2>Test assignment for Frontend Developer position</h2>
                    <h5>
                        We kindly remind you that your test assignment should 
                        be submitted as a link to github/bitbucket repository. 
                        Please be patient, we consider and respond to every 
                        application that meets minimum requirements. We look 
                        forward to your submission. Good luck! The photo has 
                        to scale in the banner area on the different screens
                    </h5>

                    <div className="submit-button">
                        <button>Sing up now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner;
