import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import matches, { fetchMatches } from '../redux/matches';

function MatchesContainer() {
    const dispatch = useDispatch()
    const { _id } = useSelector((state) => state.user.currentUser)
    const matches = useSelector((state) => state.matches.current)

    console.log(matches)

    useEffect(() => {
        dispatch(fetchMatches(_id))
    }, [])

    const renderMatches = () => {
        return matches.map(match => 
            <Fragment key={match._id}>
                <h2>{match.user.display_name}</h2>
            </Fragment>
            
        )
    }
    
    if(!matches.length) return <div>No matches!</div>
    return (
        <div className='sidebar-content-container'>
            {renderMatches()}
        </div>
    );
}

export default MatchesContainer;