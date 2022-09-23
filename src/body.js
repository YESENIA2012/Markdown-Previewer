import React from 'react';

import placeholder from './editor-placeholder';
import TextAreaContainer from './editor';
import ContainerPreview from './preview';

const style = {
  paddingTop: 20,
};

class ContainerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaText: placeholder,
      editorElementMaximized: false,
      previewElementMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      textareaText: event.target.value,
    });
  }

  handleEditorClick() {
    this.setState({
      editorElementMaximized: !this.state.editorElementMaximized,
    });
  }

  handlePreviewClick() {
    this.setState({
      previewElementMaximized: !this.state.previewElementMaximized,
    });
  }

  render() {
    const { textareaText, editorElementMaximized, previewElementMaximized } =
      this.state;

    const textAreaContainer = (
      <TextAreaContainer
        textareaText={textareaText}
        editorElementMaximized={editorElementMaximized}
        handleEditorClick={this.handleEditorClick}
        handleChange={this.handleChange}
      />
    );

    const containerPreview = (
      <ContainerPreview
        textareaText={textareaText}
        previewElementMaximized={previewElementMaximized}
        handlePreviewClick={this.handlePreviewClick}
      />
    );

    if (!editorElementMaximized && !previewElementMaximized) {
      return (
        <div className="container">
          {textAreaContainer}
          {containerPreview}
        </div>
      );
    } else if (editorElementMaximized) {
      return <div className="container">{textAreaContainer}</div>;
    } else if (previewElementMaximized) {
      return (
        <div className="container" style={style}>
          {containerPreview}
        </div>
      );
    }
  }
}

export default ContainerPage;
