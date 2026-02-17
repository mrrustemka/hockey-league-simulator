
import { Typography } from 'antd';
import { PlayOffRoundResult } from '../../data/types';
import '../../styles/Pair.css';

const { Title } = Typography;

interface PreviousPairsProps {
    teams: PlayOffRoundResult[];
    index: number;
}

function PreviousPairs({ teams, index }: PreviousPairsProps) {
    return (
        <div className='pair'>
            <div className='pair__column'>
                <img
                    className='pair__team-logo-home'
                    src={teams[0].logo}
                    alt={teams[0].name + ' Logo'}
                    loading='lazy'
                />
                <img
                    className='pair__team-logo-away'
                    src={teams[1].logo}
                    alt={teams[1].name + ' Logo'}
                    loading='lazy'
                />
                <Title className='pair__team-result-home' level={4}>
                    {teams[0].team_wins}
                </Title>
                <Title className='pair__team-result-away' level={4}>
                    {teams[1].team_wins}
                </Title>
            </div>
        </div>
    );
}

export default PreviousPairs;
