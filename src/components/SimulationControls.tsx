import { Button, Card, Col, Row, Typography } from 'antd';

const { Title } = Typography;

interface SimulationControlsProps {
  isSimulate: boolean;
  awayGoals: number;
  homeGoals: number;
  typeOfOt: string;
  isFavorite: boolean;
  buttonHandler: () => void;
  updateCounter: () => void;
}

function SimulationControls({
  isSimulate,
  awayGoals,
  homeGoals,
  typeOfOt,
  isFavorite,
  buttonHandler,
  updateCounter,
}: SimulationControlsProps) {
  return (
    <>
      <Row className='simulate-panel'>
        <Col span={24} className='simulate-panel__card'>
          <Card hoverable aria-live='polite'>
            <Title className='simulate-panel__score slide-in-left' level={2}>
              {isSimulate ? awayGoals : ' '} - {isSimulate ? homeGoals : ' '}
              {isSimulate ? ' ' + typeOfOt : ''}
            </Title>
          </Card>
        </Col>
      </Row>
      {isFavorite ? (
        <Row className='controls-panel'>
          <Col span={24} className='controls-panel__buttons'>
            <Button
              className='controls-panel__button controls-panel__button--simulate pulse'
              onClick={buttonHandler}
              disabled={isSimulate}
              size='large'
            >
              Simulate
            </Button>
            <Button
              className='controls-panel__button controls-panel__button--next'
              onClick={updateCounter}
              disabled={!isSimulate}
              size='large'
            >
              Next
            </Button>
          </Col>
        </Row>
      ) : (
        <Row className='controls-panel'>
          <Col span={24} className='controls-panel__simulating'>
            <Title level={4} className='simulating-text'>
              Simulating
              <span className='dots'></span>
            </Title>
          </Col>
        </Row>
      )}
    </>
  );
}

export default SimulationControls;
