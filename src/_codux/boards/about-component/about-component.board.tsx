import { createBoard } from '@wixc3/react-board';
import { AboutComponent } from '../../../components/about-component/about-component';

export default createBoard({
    name: 'AboutComponent',
    Board: () => <AboutComponent />,
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        windowWidth: 375,
        windowHeight: 667,
    },
});
