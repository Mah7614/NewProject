import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => this.setState({ photos: data }));
    }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    {this.state.photos.map((photo, index) => (
                        <Grid.Column width={4}>
                            <Card>
                                <Image src={photo.thumbnailUrl} />
                                <Card.Content>
                                    <Card.Header>{photo.title}</Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                        </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        );
    }
}

export default Albums;