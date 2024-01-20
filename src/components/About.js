//import React, {useState} from 'react'
import React from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle] = useState({
    //     "color" : "black",
    //     "backgroundColor" : "white"

    // })
//    const [btnText,setbtnText] = useState("Enable Dark Mode")
//     const toggleStyle = ()=>{
//     if(myStyle.color === "white"){
//         setmyStyle({
//             "color" : "black",
//             "backgroundColor" : "white"
//         });
//         setbtnText("Enable Dark Mode")
//     }
//     else{
//         setmyStyle({
//             "color" : "white",
//             "backgroundColor" : "black",
//             "border" : "1px solid white"
//         }) 
//         setbtnText("Enable Light Mode")
//     }
//    }
    let myStyle = {
        color : props.mode==='light'?"#042743" : "white",
        backgroundColor : props.mode==='light'?"white" : "rgb(36 74 104)",
    }
    console.log(props)
  return (
        <div className='container py-2' style={{color : props.mode==='light'?"black" : "white"}}> 
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            Analyze your texts
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
        TextUtils provides users with a set of functionalities to manipulate and analyze text. Users can input text into the tool, and it offers the following operations:
        Copy Text,Convert to Upper and Lower Case,Clear Text,Remove Extra Spaces,Text Trim,Character Count,Word Count,Text Preview etc.
This tool is designed to enhance user experience when working with text, offering simple yet powerful features for basic text manipulation and analysis.</div>
  
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
           Free to use
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
        The Free TextUtils is a user-friendly tool designed to assist individuals in analyzing and understanding text content. This web-based application provides a range of features to enhance text comprehension and manipulation without any cost. Users can input their text and access the functionalities.
               </div>
    </div>
    </div>
    <div className="accordion-item" style={myStyle}> 
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}> 
            Browser Compatible
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
            This word counter software works in any web brrowsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.        </div>
        </div>
    </div>
    </div>
    {/* <div className="container my-3">
    <button type="button" onClick={toggleStyle} className="btn btn-primary m-b-5">{btnText}</button>
    </div> */}
        </div>
  )
}
