import React from 'react';


function Bio() {
    const fname = 'Shiyam';
    const lname = 'sai';
    const welbtn = React.createwelbtnt( "button" ,
        {
            className:("btn"),
            onClick:() => alert("Welcome " + fname + " " + lname + "!")
        },
        "Click here"
    );

   return (
    <div>
        {welbtn}
    </div>
   )
}

export default Bio;