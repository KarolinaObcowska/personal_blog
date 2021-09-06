import React from 'react';
import { Global, css } from '@emotion/react'


const Layout = ({ children }) => {
    return (
        <div>
            <Global 
                styles={css`
                  * {
                      box-sizing: border-box;
                      margin: 0;
                  };

                  * + * {
                      margin-top: 1rem;
                  };

                  html, body {
                      margin: 0;
                      color: #555;
                      font-family: -apple-system, Roboto;
                      font-size: 18px;
                      line-height: 1.4
                  };

                  > div {
                      margin-top: 0;
                  }

                  h1, h2, h3, h4, h5, h6 {
                      color: #222;
                      line-height: 1.1;

                      + * {
                          margin-top: 0.5rem;
                      }
                  }

                  strong {
                      color: #222
                  };

                  li {
                      margin-top: 0.25rem;
                  }
                `} 
            /> 
            <header></header>  
            <main>{children}</main>        
        </div>
    )
}

export default Layout
