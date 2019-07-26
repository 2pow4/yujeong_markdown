const React =require('react')

class Editor extends React.Component {
  render() {
    const style = {
        backgroundColor : 'lavender',
        width: '50%',
        height: '100%',
        float: 'left'
    }

    return (
      <div style = {style}>
        This is editor.
      </div>
    )
  }
}

module.exports = Editor