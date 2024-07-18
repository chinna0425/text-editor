import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  ButtonBold,
  ButtonItalic,
  ButtonUnderLine,
  TextBox,
} from './stylesComponent'
import './index.css'

class TextEditor extends Component {
  state = {
    cr: {
      st1: {color1: '#f1f5f9', isActive: false},
      st2: {color1: '#f1f5f9', isActive: false},
      st3: {color1: '#f1f5f9', isActive: false},
    },
    st: {fontWeight: 'normal', fontStyle: 'normal', fontDec: 'none'},
  }

  onChangeStatusBold = () => {
    const {cr, st} = this.state
    if (cr.st1.isActive) {
      this.setState({
        cr: {...cr, st1: {color1: '#f1f5f9', isActive: false}},
        st: {...st, fontWeight: 'normal'},
      })
    } else {
      this.setState({
        cr: {...cr, st1: {color1: '#faff00', isActive: true}},
        st: {...st, fontWeight: 'bold'},
      })
    }
  }

  onChangeStatusItalic = () => {
    const {cr, st} = this.state
    if (cr.st2.isActive) {
      this.setState({
        cr: {...cr, st2: {color1: '#f1f5f9', isActive: false}},
        st: {...st, fontStyle: 'normal'},
      })
    } else {
      this.setState({
        cr: {...cr, st2: {color1: '#faff00', isActive: true}},
        st: {...st, fontStyle: 'italic'},
      })
    }
  }

  onChangeStatusUnder = () => {
    const {cr, st} = this.state
    if (cr.st3.isActive) {
      this.setState({
        cr: {...cr, st3: {color1: '#f1f5f9', isActive: false}},
        st: {...st, fontDec: 'normal'},
      })
    } else {
      this.setState({
        cr: {...cr, st3: {color1: '#faff00', isActive: true}},
        st: {...st, fontDec: 'underline'},
      })
    }
  }

  render() {
    const {cr, st} = this.state
    console.log(cr)
    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="left-container">
            <h1 className="left-heading-title">Text Editor</h1>
            <div className="left-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
                className="left-text-image"
              />
            </div>
          </div>
          <div className="right-container">
            <div className="icons-container">
              <ButtonBold
                data-testid="bold"
                props1={cr}
                onClick={this.onChangeStatusBold}
                type="button"
                aria-label="bold"
              >
                <VscBold size={30} />
              </ButtonBold>
              <ButtonItalic
                data-testid="italic"
                onClick={this.onChangeStatusItalic}
                props2={cr}
                type="button"
                aria-label="italic"
              >
                <GoItalic size={30} />
              </ButtonItalic>
              <ButtonUnderLine
                data-testid="underline"
                onClick={this.onChangeStatusUnder}
                props3={cr}
                type="button"
                aria-label="underline"
              >
                <AiOutlineUnderline size={30} />
              </ButtonUnderLine>
            </div>
            <hr />
            <TextBox props4={st}>{}</TextBox>
          </div>
        </div>
      </div>
    )
  }
}
export default TextEditor
