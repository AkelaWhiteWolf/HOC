const withTruncateParagraph = (
  Component: React.FC<{ children: string }>,
  limit = 10,
) => {
  const wrapper = ({ children, ...rest }) => {
    const substring: string = children.substring(0, limit);

    console.log({ children, substring });
    return <Component {...rest}>{substring}</Component>;
  };

  wrapper.displayName = `WithTruncateParagraph(${
    Component.displayName || Component.name || 'Component'
  })`;
  return wrapper;
};

const Paragraph = (props) => <p>{props.children}</p>;

const ShortParagraph = withTruncateParagraph(Paragraph);

function App() {
  return (
    <ShortParagraph>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, adipisci.
    </ShortParagraph>
  );
}

export default App;
