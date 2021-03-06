import React from 'react';
import { connect } from 'react-redux';

import './CollectionPage.styles.scss';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

const CollectionPage = (props) => {
    const content = props.collection.items.map(item => {
        return (
            <CollectionItem key={item.id} item={item} />
        )
    })
    return ( 
        <div className='collection-page'>
            <div className='title'>
                <h2>{`${props.collection.title}`}</h2>
            </div> 
            <div className='items'>
                {content}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(CollectionPage);