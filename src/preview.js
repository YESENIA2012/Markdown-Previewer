import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

let displayIconArrow = {};
let displayIconTowArrow = {};

const ContainerPreview = (props) => {
  const { textareaText, previewElementMaximized, handlePreviewClick } = props;

  if (previewElementMaximized) {
    displayIconArrow = { display: 'none' };
    displayIconTowArrow = { display: 'inline' };
  } else {
    displayIconArrow = {};
    displayIconTowArrow = { display: 'none' };
  }

  return (
    <section className="container-preview">
      <div className="bar-box">
        <FontAwesomeIcon
          className="icon-free-code-camp"
          icon={faFreeCodeCamp}
        />
        <p className="text-bar">Previewer</p>
        <FontAwesomeIcon
          className="open-icon"
          style={displayIconArrow}
          icon={faMaximize}
          onClick={handlePreviewClick}
        />
        <FontAwesomeIcon
          icon={faDownLeftAndUpRightToCenter}
          className="closed-icon"
          style={displayIconTowArrow}
          onClick={handlePreviewClick}
        />
      </div>
      <div className="box">
        <ReactMarkdown
          children={textareaText}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={prism}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </section>
  );
};

export default ContainerPreview;
