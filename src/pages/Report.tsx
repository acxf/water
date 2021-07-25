import React from 'react';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';

import { LineChart, XAxis, LabelList, Line, YAxis } from 'recharts';

import Page from '../components/Page';
import Section from '../components/Section';

// import './styles.css';

const Report: React.FC = () => {
  const data: any[] = [
    { name: 'M', waterUsed: 300, b: 270 },
    { name: 'T', waterUsed: 276, b: 270 },
    { name: 'W', waterUsed: 240, b: 270 },
    { name: 'T', waterUsed: 325, b: 270 },
    { name: 'F', waterUsed: 220, b: 270 },
    { name: 'Today', waterUsed: 157, b: 270 },
    { name: 'S', b: 270 },
  ];

  return (
    <Page name="Report">
      <IonSegment value="weekly">
        <IonSegmentButton value="weekly">
          <IonLabel>Weekly</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="monthly">
          <IonLabel>Monthly</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="yearly">
          <IonLabel>Yearly</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Usage</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <LineChart
            width={330}
            height={200}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis width={35} unit="L" />
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <Line
              type="monotone"
              dataKey="waterUsed"
              stroke="#67ceee"
              yAxisId={0}
              // dot={false}
            >
              {/* <LabelList dataKey="waterUsed" position="bottom" offset={10} /> */}
            </Line>
            <Line
              type="monotone"
              dataKey="b"
              stroke="#67eeab"
              yAxisId={0}
              dot={false}
            />
          </LineChart>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Bathroom Toilet</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>5 Flushes</IonCardContent>
      </IonCard>
    </Page>
  );
};

export default Report;
