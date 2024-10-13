import { createBoard } from '@wixc3/react-board';
import { Subscription } from '../../../components/subscription/subscription';

export default createBoard({
    name: 'Subscription',
    Board: () => <Subscription />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
