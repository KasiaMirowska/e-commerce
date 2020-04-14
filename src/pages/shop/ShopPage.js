import React from 'react';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import {Route} from 'react-router-dom';

const ShopPage = ({match}) => {
    console.log(match.path)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )

}

export default ShopPage;