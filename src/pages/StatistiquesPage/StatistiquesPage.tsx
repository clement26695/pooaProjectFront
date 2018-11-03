
import * as React from 'react';
import './StatistiquesPage.css';

import DoughnutChart from 'react-chartjs-2';

interface IStatistiquesPageProps {
    episodeSeenCount: number;
    serieInWatchlistCount: number;
    serieByGenreCount: any[];
    totalWatchingTime: number;
    fetchStatsRequest: (userId: string ) => void;
    userId: string | null,
}

export class StatistiquesPage extends React.Component<IStatistiquesPageProps> {

  public componentWillMount() {
    if (this.props.userId) {
        this.props.fetchStatsRequest(this.props.userId);
    }
  }

  public render() {
    // const chartData = {
    //     labels: [
    //         'Red',
    //         'Green',
    //         'Yellow',
    //     ],
    //     datasets: [{
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //         ],
    //         hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //         ]
    //     }]
    // };
    const displayedData = this.props.serieByGenreCount || [];
    const chartData = {
            labels: displayedData.map(item => item.name),
            datasets: [{
                data: displayedData.map(item => item.count),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };  

    return (
      <div className="StatistiquesPage">
          <span>Statistiques</span>
          <div>
            <span>episodeSeenCount: {this.props.episodeSeenCount}</span>
          </div>
          <div>
            <span>serieInWatchlistCount: {this.props.serieInWatchlistCount}</span>
          </div>
          <div>
            <span>totalWatchingTime: {this.props.totalWatchingTime}</span>
          </div>
          <div>
            {/* <span>serieByGenreCount: {this.props.serieByGenreCount}</span> */}
            <DoughnutChart data={chartData} />
          </div>
      </div>
    );
  }
}
