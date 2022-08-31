import React from 'react';

import placeholder from './editor-placeholder';
import TexttareaContainer from './editor';
import ContainerPreview from './preview';

/* const styleOne = {
  display: 'none',
  height: 760,
};

const styleTwo = {
  height: 600,
}; */

class ContainerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: placeholder,
      editorElementmaximized: false,
      previewElementMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      textarea: event.target.value,
    });
  }

  handleEditorClick() {
    console.log('esta agarrando el handleEditorClick ');
    this.setState({
      editorElementmaximized: !this.state.editorElementmaximized,
    });
  }

  handlePreviewClick() {
    console.log('Le doy click a la función del componente hijo');
    this.setState({
      previewElementMaximized: !this.state.previewElementMaximized,
    });
  }

  render() {
    /* 
    const heightContainer = { height: styleOne.height };
    const heightEditor = { height: styleTwo.height };
    const displayNone = { display: styleOne.display }; */

    const texttareaContainer = (
      <TexttareaContainer
        textarea={this.state.textarea}
        editorElementmaximized={this.state.editorElementmaximized}
        handleEditorClick={this.handleEditorClick}
        onChange={this.handleChange}
      />
    );

    const containerPreview = (
      <ContainerPreview
        textarea={this.state.textarea}
        previewElementMaximized={this.state.previewElementMaximized}
        handlePreviewClick={this.handlePreviewClick}
      />
    );

    if (
      this.state.editorElementmaximized == false &&
      this.state.previewElementMaximized == false
    ) {
      return (
        <div className="container">
          {texttareaContainer}
          {containerPreview}
        </div>
      );
    } else if (this.state.editorElementmaximized == true) {
      return <div className="container">{texttareaContainer}</div>;
    } else if (this.state.previewElementMaximized == true) {
      return <div className="container">{containerPreview}</div>;
    }
  }
}

export default ContainerPage;
