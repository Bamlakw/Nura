import { createBoard } from '@wixc3/react-board';
import { Partners } from '../../../components/partners/partners';

export default createBoard({
    name: 'Partners',
    Board: () => <Partners />,
    isSnippet: true,
});
