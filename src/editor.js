import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

const TexttareaContainer = (props) => {
  const { textarea, handleChange, handleEditorClick } = props;
  return (
    <div className="textarea-container">
      <div className="bar-textarea">
        <FontAwesomeIcon
          className="icon-free-code-camp"
          icon={faFreeCodeCamp}
        />
        <p className="text-bar">Editor</p>
        <FontAwesomeIcon
          className="icon-arrow1"
          icon={faMaximize}
          onClick={handleEditorClick}
        />
        <FontAwesomeIcon
          icon={faDownLeftAndUpRightToCenter}
          className="icon-two-arrow"
        />
      </div>
      <textarea
        className="editor"
        defaultValue={textarea}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TexttareaContainer;
