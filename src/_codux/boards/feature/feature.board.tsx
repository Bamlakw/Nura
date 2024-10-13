import { createBoard } from '@wixc3/react-board';
import { Feature } from '../../../components/feature/feature';

export default createBoard({
    name: 'Feature',
    Board: () => <Feature />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 929,
    },
});
