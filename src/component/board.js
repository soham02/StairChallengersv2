
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
            <button onClick={handleClick} data-id='7'>7 Days</button>
            <button onClick={handleClick} data-id='30'>30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>

        <Profiles Leaderboard={sort(Leaderboard)}></Profiles>

    </div>
  )
}

function sort (data) {
    let filter = data.sort ((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

    return filter;
}