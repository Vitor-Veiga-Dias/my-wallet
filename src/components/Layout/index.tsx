import React from "react";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Grid } from "./styled";
import { Props } from "./types";

const Layout = ({ children }: Props) => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children }
            </Content>
        </Grid>
    )
}

export default Layout;