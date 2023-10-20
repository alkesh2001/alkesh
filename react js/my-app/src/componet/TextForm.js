import React, {useState} from 'react'

export default function TextForm(prop) {
    
    const onclickchange = ()=>{
        // console.log('onclick change'+ text)
        let newtext = text.toUpperCase()
        setText(newtext);
        prop.showalert('converted to uppercase', 'success')
        
    }
    const onclicklowerchange = ()=>{
        let lowertext = text.toLowerCase()
        setText(lowertext)
        prop.showalert('converted to lowercase', 'success')
    } 
    const onclickclear = ()=>{
        let cleartext = ' '
        setText(cleartext)
        prop.showalert('text clear', 'success')
    }
    const onclickcopy = ()=>{
        let  copytext = document.getElementById('myBox')
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        prop.showalert('copy all text', 'success')
    }
    
    const onchange = (event)=>{   
        // console.log('on change')
        setText(event.target.value)
    }
    const [text, setText] = useState(' ');
    
    return(
        <>
    
        <div className="container my-4" style={{color: prop.mode === 'dark'? 'white':'black'} }>
            <h1>{prop.heading}</h1>
                 <div className="mb-3">
                 <textarea className="form-control" style={{backgroundColor: prop.mode ==='dark'? 'gray':'white' , color: prop.mode ==='dark'? 'white':'black'}} onChange={onchange} value={text} id="myBox" rows="6"></textarea>
             </div>
            <button className='btn btn-primary me-2' onClick={onclickchange}>Convert to Uppercase   </button>
            <button className='btn btn-primary  ' onClick={onclicklowerchange}>Convert to Lowercase   </button>
            <button className='btn btn-primary my-2 mx-2' onClick={onclickclear}>Clear text </button>
               
            <button className='btn btn-primary mx-2 my-2' onClick={onclickcopy}>Copy text </button>
           
            {/* <button className='btn btn-primary mx-3' onClick={onclickcolor}> text color change </button> */}
        </div>    
        <div className="container my-4" style={{color: prop.mode ==='dark'? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} word and {text.length} character</p>
            <p>{ 0.008 * text.split(" ").length } minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}