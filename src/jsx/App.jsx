const React =require('react')
const Editor1 =require('./Editor1.jsx')
const Preview1 =require('./Preview1.jsx')


class App extends React.Component {

  state = {
    editor: ""
  }

  componentWillMount(){
    if(window.localStorage.content){
      this.setState({
        editor: window.localStorage.content
      })
    }
  }

  handleEditorInput(e){
    this.setState({editor: e.target.value})
    window.localStorage.setItem("content", e.target.value)
  }

  render() {
    return (
      <div>
         <div className='editor'>
            <Editor1 
              onInputChange={(e) => this.handleEditorInput(e)}
              editorValue={this.state.editor}
            />
        </div>
        <div className = 'preview'>
          <Preview1
              inputValue={this.state.editor}
           />
        </div>
      </div>
    )
  }
}

module.exports = App