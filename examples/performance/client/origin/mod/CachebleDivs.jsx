import React from 'react';

const leaf = <div>cacheble divs</div>;

const CachebleDivs = React.createClass({
  render() {
    const { depth, breadth } = this.props;

    if (depth <= 0) {
      return leaf;
    }

    const children = [];
    for (let i = 0; i < breadth; i++) {
      children.push(<CachebleDivs key={i} depth={depth - 1} breadth={breadth} />);
    }
    return <div>{children}</div>;
  }
});

export default CachebleDivs;
