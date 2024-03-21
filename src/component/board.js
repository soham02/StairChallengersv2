import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {
    const handleClick = (e) => { 
        console.log(e.target)
  }

  return (
    <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>
        <div className="duration">
            <button onClick={handleClick} data-id='7'>Login</button>
        </div>
        <Profiles Leaderboard={sort(Leaderboard)}></Profiles>
    </div>
  )
}

function sort (data) {
    let filter = data.sort ((a, b) => {
        if ( a.steps === b.steps){
            return b.steps - a.steps;
        } else{
            return b.steps - a.steps;
        }
    })

    return filter;
}
