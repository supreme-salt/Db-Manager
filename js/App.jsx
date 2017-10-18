import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Landing from './Landing';
import ProductForm from './ProductForm';

// <Route path="/" component={Search} />
const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      seasons: [],
      views: []
    };
    this.addToState = this.addToState.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products')
      .then(results => {
        this.setState(
          {
            products: results.data.products,
            categories: results.data.categories,
            seasons: results.data.seasons
          },
          () => {
            axios
              .get('http://localhost:3000/api/pictures/views')
              .then(viewValues => {
                this.addToState({ views: viewValues.data });
              })
              .catch(err => console.log(err));
          }
        );
      })
      .catch(err => console.log(err)); //eslint-disable-line
  }

  addToState(values) {
    const newState = Object.assign(this.state, values);
    console.log(newState);

    this.setState(newState, err => {
      if (err) {
        console.log('error happened: ', err);
      }
      console.log('Successful State Change');
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <Landing products={this.state.products} />} />
            <Route
              exact
              path="/form"
              render={() => (
                <ProductForm categories={this.state.categories} seasons={this.state.seasons} views={this.state.views} />
              )}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
