const React =require('react')

class Preview extends React.Component {
  render() {
    const style ={
        backgroundColor: 'plum',
        width: '50%',
        height: '100%',
        float: 'left'
    }


    return (
      <div style={style}>
        This is preview.
      </div>
    )
  }
}

module.exports = Preview