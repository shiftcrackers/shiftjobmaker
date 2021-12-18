import React from "react";
import TopMenu from "../common/TopMenu";
import Album from "./Album";
import Checkout from "./checkout/Checkout";
import Pricing from "./Pricing";
import SignIn from "./SignIn";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";
import StickyFooter from "./StickyFooter";
// import Dashboard from "./dashboard/Dashboard";
// import Blog from "./blog/Blog";

const Sample = () => {
    return (
        <div>
            <TopMenu title="샘플" />
            <div>
                {/* <Dashboard /> */}
                {/* <Blog /> */}
                <Checkout />
                <Album />
                <Pricing />
                <SignInSide />
                <SignIn />
                <SignUp />
                <StickyFooter />
            </div>
        </div>
    );
};

export default Sample;
