import {useParams} from "react-router-dom"; 
import TimeCard from "../components/TimeCard";
import records from "../data/data.json";
import Work from "../images/work.svg";
import Play from "../images/play.svg";
import Study from "../images/study.svg";
import Exercise from "../images/exercise.svg";
import Social from "../images/social.svg";
import SelfCare from "../images/selfCare.svg";

const TimeCards = () => {
    const {time} = useParams();
    
    const IMAGES = [Work, Play, Study, Exercise, Social, SelfCare];

    return (
        <div className='timeCards'>
        {records.map((record) => (
            <TimeCard
              key={record.title}
              title={record.title}
              img={IMAGES[record.position]}
              bgColor={record.color}
              currHours={record.timeframes[time].current}
              prevHours={record.timeframes[time].previous}
            />
          ))}
          </div>
    )
}; 

export default TimeCards; 