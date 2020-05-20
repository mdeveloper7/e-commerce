import React from 'react';
import { connect } from 'react-redux';
import './collections-overview.styles.scss';
import CollectionPreview  from "../collection-preview/collection-preview.component";
import {selectCollections} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({collections}) => {
    return (
    <div className='collections-overview' >
        {
            collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>);
};

const mapStateToProps = createStructuredSelector ({
    collectionProps: selectCollections
});


export default connect(mapStateToProps)(CollectionsOverview);