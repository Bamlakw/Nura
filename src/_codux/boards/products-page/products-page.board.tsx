import { createBoard } from '@wixc3/react-board';
import { ProductsPage } from '../../../components/products-page/products-page';

export default createBoard({
    name: 'ProductsPage',
    Board: () => <ProductsPage />,
    isSnippet: true,
});
