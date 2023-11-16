import { TruncateText } from 'src/hocs';
import { HelloWorld } from 'src/components';

function App() {
  return (
    <TruncateText>
      <HelloWorld />
    </TruncateText>
  );
}

export default App;
