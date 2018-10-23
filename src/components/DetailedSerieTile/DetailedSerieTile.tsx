import * as React from 'react';
import './DetailedSerieTile.css';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { Image } from '../Image/Image';



interface IDetailedSerieTileProps {
    title: string;
    description: string;
    imgSrc: string;
    iconType: 'add' | 'delete';
    onIconClick: () => void;
};

export class DetailedSerieTile extends React.Component<IDetailedSerieTileProps> {
  public render() {
    return (
      <div className="DetailedSerie">
        <div className="DetailedSerieTileContainer">
            <div className="DetailedSerieTile-ImageContainer">
                <Image imgSrc={this.props.imgSrc}/>
            </div>
            <div className="DetailedSerieTile-Description">
                <span className="DetailedSerieTile-Title"> {this.props.title} </span>
                <span className="DetailedSerieTile-Description">{this.props.description}</span>
                <Button variant="fab" color="primary" aria-label="Add" className="DetailedSerieTile-Add" 
                    onClick={() => this.props.onIconClick()}>
                    {this.props.iconType === 'add' ? <AddIcon /> : null}
                </Button>
            </div>
        </div>
      </div>
    );
  }
}
