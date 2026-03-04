import { App } from './App';
import { screen, render } from '@/__tests__/custom-render';

const sut = () => {
  return render(<App />);
};

test('should render <App/>', () => {
  sut();

  const text = screen.getByRole('heading', { name: 'Hello World' });

  expect(text).toBeVisible();
});
