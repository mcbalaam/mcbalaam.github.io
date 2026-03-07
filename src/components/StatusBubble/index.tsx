import type { PropsWithChildren } from "react";
import "./styles.css";
import ContentLoader from "react-content-loader";
import React from "react";

export default function StatusBubble({ children }: PropsWithChildren<{}>) {
  const hasContent = React.Children.toArray(children).some(child => 
    child !== null && child !== undefined && child !== '' && !(typeof child === 'string' && child.trim() === '')
  );

  return (
    <div className="status-bubble">
      {hasContent ? children : (
        <ContentLoader
          speed={1}
          width={110}
          height={20}
          viewBox="0 0 110 20"
          backgroundColor="#bbb1e34d"
          foregroundColor="#a5a6bf99"
          style={{ display: 'block' }}
        >
          <rect x="0" y="5" rx="5" ry="5" width="70" height="10" />
          <rect x="75" y="5" rx="5" ry="5" width="30" height="10" />
        </ContentLoader>
      )}
    </div>
  );
}