import { App } from './App';
import { render } from '@/__tests__/custom-render';

const sut = () => {
  return render(<App />);
};

test('should render <App/>', () => {
  sut();
});
