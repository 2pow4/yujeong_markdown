const React =require('react')
const showdown = require('showdown')

const Preview = ({inputValue})=>{
    const converter = new showdown.Converter();
    const html = converter.makeHtml(inputValue);

    return(
        <div dangerouslySetInnerHTML={{__html: html}}/>
    );
}

module.exports = Preview