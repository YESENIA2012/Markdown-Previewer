import React from 'react';

import placeholder from './editor-placeholder';
import TexttareaContainer from './editor';
import ContainerPreview from './preview';

const style = {
  paddingTop: 20,
};

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
    this.setState({
      editorElementmaximized: !this.state.editorElementmaximized,
    });
  }

  handlePreviewClick() {
    this.setState({
      previewElementMaximized: !this.state.previewElementMaximized,
    });
  }

  render() {
    const texttareaContainer = (
      <TexttareaContainer
        textarea={this.state.textarea}
        editorElementmaximized={this.state.editorElementmaximized}
        handleEditorClick={this.handleEditorClick}
        handleChange={this.handleChange}
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
      return (
        <div className="container" style={style}>
          {containerPreview}
        </div>
      );
    }
  }
}

export default ContainerPage;
