import React from 'react';
import LeftSideBar from './LeftSideBar';
import RecsMainContainer from './RecsMainContainer';
import { spotifyLogin} from '../redux/user';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function RecsPage() {
    let dispatch = useDispatch()
    let [searchParams] = useSearchParams();

    useEffect(() => {
        let code = searchParams.get("code");
        if(code){
            dispatch(spotifyLogin(code))
        }
    }, [dispatch, searchParams])

    return (
        <div className='recs-page'>
            <LeftSideBar />
            <RecsMainContainer />
        </div>
    );
}

export default RecsPage;