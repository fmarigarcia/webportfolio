import React from 'react';
import ReactMarkdown from 'react-markdown';

const JobText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-2 max-w-700 overflow-y-scroll md:mt-0 md:overflow-hidden">
      <ReactMarkdown
        components={{
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold md:text-2xl" {...props}></h3>,
          strong: ({ node, ...props }) => (
            <strong className="text-accent-dark dark:text-accent-light" {...props}></strong>
          ),
          a: ({ node, ...props }) => (
            <a
              className={`underline decoration-transparent transition-all 
              duration-300 hover:decoration-inherit hover:decoration-2`}
              {...props}
            ></a>
          ),
          em: ({ node, ...props }) => <em className="text-sm" {...props}></em>,
          li: ({ node, ...props }) => <li className="text-md mb-1" {...props}></li>
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default JobText;
