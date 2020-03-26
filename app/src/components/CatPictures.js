import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

import { fetchPictures } from '../actions';

const CatPictures = props => {
    console.log(props);

    useEffect (() => {
        props.fetchPictures();
    }, []);


    // if ( props.isFetching) {
    //     return <Loader type="BallTriangle" color="#somecolor" height={80} width={80} />;

    // }

    // if ( props.isFetching) {
    //     return <h1>Loading...</h1>
    // }
    if (props.isFetching) {
        return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
      }

    return(
        <div className='Cat'>
           <img src={props.catPictures}/>
           <button onClick={props.fetchPictures}> Next Cat! </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        catPictures: state.catPictures,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchPictures}
)(CatPictures);