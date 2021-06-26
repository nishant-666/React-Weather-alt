import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

export default function Forecast({ forcast }) {
    return (
        <div style={{ marginTop: 20 }}>
            <div className="forecast-main-header">
                8 Day Forecast
            </div>
            <Card.Group itemsPerRow={4}>
                {forcast.map((data) => {
                    return (
                        <Card className="forecast-card">
                            <Card.Content>
                                <Card.Header className="forecast-date">
                                    Date: {moment.unix(data.dt).format('LL')}
                                </Card.Header>
                                <Card.Header className="forecast-header">
                                    Temprature: {Math.round((data.temp.max + data.temp.min) / 2)} ℃
                                </Card.Header>
                                <Card.Meta className="forecast-header">
                                    Humidity: {data.humidity} %
                                </Card.Meta>
                                <Card.Description className="temp-desc">
                                    Description: {data.weather[0].description}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}
