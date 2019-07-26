const React =require('react')

const Editor = ({onInputChange, value}) =>{
    return(
        <div>
            <textarea 
                autoFocus = {false}
                placeholder = "Write here"
                onChange={(e)=>onInputChange(e)}
                value={value}
                className = 'textarea'
            />
        </div>
        )
    }


module.exports = Editor