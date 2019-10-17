import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.components';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

const CollectionsOverView = ({collections}) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverView)